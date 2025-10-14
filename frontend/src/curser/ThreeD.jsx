import React, { useEffect, useRef } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.148.0";

const ThreeD = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Colors
    const black = 0x000000;
    const white = 0xffffff;
    const cyan = 0x00ffff;
    const purple = 0x9d00ff;
    const blue = 0x0066ff;
    const red = 0xff0000;
    const orange = 0xff6600;

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(black);
    scene.fog = new THREE.FogExp2(black, 0.015);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(cyan, 2);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(purple, 2);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(blue, 1.5);
    pointLight3.position.set(0, 0, -10);
    scene.add(pointLight3);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 0, 40);
    scene.add(camera);

    // RENDERER
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // NEURAL NETWORK STRUCTURE
    const layers = [
      { nodes: 8, z: -15, color: cyan },      // Input layer
      { nodes: 12, z: -5, color: blue },      // Hidden layer 1
      { nodes: 16, z: 0, color: purple },     // Hidden layer 2
      { nodes: 12, z: 5, color: blue },       // Hidden layer 3
      { nodes: 6, z: 15, color: orange }      // Output layer
    ];

    const neurons = [];
    const connections = [];
    const pulses = [];

    // Create neurons (nodes)
    layers.forEach((layer, layerIndex) => {
      const layerNeurons = [];
      const radius = 8 + layerIndex * 0.5;
      const angleStep = (Math.PI * 2) / layer.nodes;

      for (let i = 0; i < layer.nodes; i++) {
        const angle = angleStep * i;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = layer.z;

        // Neuron sphere
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshStandardMaterial({
          color: layer.color,
          emissive: layer.color,
          emissiveIntensity: 0.5,
          metalness: 0.8,
          roughness: 0.2,
        });
        const neuron = new THREE.Mesh(geometry, material);
        neuron.position.set(x, y, z);
        scene.add(neuron);

        // Neuron glow
        const glowGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: layer.color,
          transparent: true,
          opacity: 0.2,
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(x, y, z);
        scene.add(glow);

        layerNeurons.push({ mesh: neuron, glow: glow, position: new THREE.Vector3(x, y, z) });
      }
      neurons.push(layerNeurons);
    });

    // Create connections between layers
    for (let l = 0; l < neurons.length - 1; l++) {
      const currentLayer = neurons[l];
      const nextLayer = neurons[l + 1];

      currentLayer.forEach((neuron1) => {
        nextLayer.forEach((neuron2) => {
          // Only connect some neurons randomly for visual clarity
          if (Math.random() > 0.3) {
            const points = [];
            points.push(neuron1.position);
            points.push(neuron2.position);

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
              color: 0x444444,
              transparent: true,
              opacity: 0.15,
            });
            const line = new THREE.Line(geometry, material);
            scene.add(line);
            connections.push({ 
              line, 
              start: neuron1.position, 
              end: neuron2.position,
              originalOpacity: 0.15
            });
          }
        });
      });
    }

    // Create data pulses that travel through network
    function createPulse() {
      if (connections.length === 0) return;

      const layerIndex = Math.floor(Math.random() * (neurons.length - 1));
      const neuronIndex = Math.floor(Math.random() * neurons[layerIndex].length);
      const startNeuron = neurons[layerIndex][neuronIndex];

      // Find connections from this neuron
      const validConnections = connections.filter(conn => 
        conn.start.equals(startNeuron.position)
      );

      if (validConnections.length > 0) {
        const connection = validConnections[Math.floor(Math.random() * validConnections.length)];
        
        const geometry = new THREE.SphereGeometry(0.15, 8, 8);
        const color = layers[layerIndex].color;
        const material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
        });
        const pulse = new THREE.Mesh(geometry, material);
        pulse.position.copy(connection.start);
        scene.add(pulse);

        pulses.push({
          mesh: pulse,
          start: connection.start.clone(),
          end: connection.end.clone(),
          progress: 0,
          connection: connection,
          color: color
        });
      }
    }

    // Floating particles in background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: cyan,
      transparent: true,
      opacity: 0.3,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // MOUSE INTERACTION
    const mouse = new THREE.Vector2();
    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove, false);

    function onTouchMove(event) {
      mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("touchmove", onTouchMove, false);

    // ANIMATION
    let pulseTimer = 0;
    const animate = () => {
      const time = performance.now() * 0.001;

      // Rotate entire network
      neurons.forEach((layer, index) => {
        layer.forEach((neuron) => {
          const offset = index * 0.1;
          neuron.mesh.rotation.y = time * 0.5 + offset;
          neuron.mesh.rotation.x = time * 0.3 + offset;
          
          // Pulse glow
          neuron.glow.scale.set(
            1 + Math.sin(time * 2 + offset) * 0.2,
            1 + Math.sin(time * 2 + offset) * 0.2,
            1 + Math.sin(time * 2 + offset) * 0.2
          );
        });
      });

      // Animate data pulses
      pulses.forEach((pulse, index) => {
        pulse.progress += 0.02;

        if (pulse.progress <= 1) {
          // Move pulse along connection
          pulse.mesh.position.lerpVectors(pulse.start, pulse.end, pulse.progress);
          
          // Highlight connection
          pulse.connection.line.material.opacity = 0.6;
          pulse.connection.line.material.color.setHex(pulse.color);
          
          // Pulse scale
          const scale = 1 + Math.sin(pulse.progress * Math.PI) * 0.5;
          pulse.mesh.scale.set(scale, scale, scale);
        } else {
          // Remove completed pulse
          scene.remove(pulse.mesh);
          pulse.connection.line.material.opacity = pulse.connection.originalOpacity;
          pulse.connection.line.material.color.setHex(0x444444);
          pulses.splice(index, 1);
        }
      });

      // Create new pulses periodically
      pulseTimer++;
      if (pulseTimer > 15) {
        createPulse();
        createPulse();
        pulseTimer = 0;
      }

      // Rotate background particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0003;

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Gentle camera rotation
      camera.position.x += Math.sin(time * 0.1) * 0.1;
      camera.position.y += Math.cos(time * 0.15) * 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl" style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default ThreeD;