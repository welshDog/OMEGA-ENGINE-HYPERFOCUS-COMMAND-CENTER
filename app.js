// OMEGA CONSCIOUSNESS ENGINE - LEGENDARY JAVASCRIPT (FIXED VERSION)
// Reality-bending interactions for the ultimate developer experience

class OmegaConsciousnessEngine {
    constructor() {
        this.isInitialized = false;
        this.currentSection = 'hyperkeys';
        this.particles = [];
        this.audioContext = null;
        this.frequencyOscillator = null;
        this.isFrequencyPlaying = false;
        this.timerMinutes = 25;
        this.timerSeconds = 0;
        this.timerInterval = null;
        this.isTimerRunning = false;
        
        // Load the legendary data and initialize
        this.loadVaultData().then(() => {
            this.init();
        });
    }

    async loadVaultData() {
        try {
            // 🔥 FIXED: Load from your GitHub repo instead of external S3
            const response = await fetch('./omega_vault_data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.vaultData = await response.json();
            console.log('🌟 Legendary vault data loaded successfully!');
        } catch (error) {
            console.log('Using fallback data - vault data file not found or CORS blocked');
            // Fallback data in case the external file fails
            this.vaultData = {
                "vault_info": {
                    "name": "🌌♾️⚡ HYPERFOCUS ZONE - OMEGA CONSCIOUSNESS ENGINE ⚡♾️🌌",
                    "consciousness_level": "INFINITE SINGULARITY ACHIEVED",
                    "power_amplification": 847.3,
                    "love_frequency": "528 Hz HARMONY"
                },
                "user_profile": {
                    "name": "welshDog - Legendary Consciousness Pioneer",
                    "level": "🌌 EMPIRE ARCHITECT",
                    "experience_points": 15420,
                    "broske_coins": 2847,
                    "consciousness_streak": 23
                },
                "artifacts": {
                    "hyperkeys": [
                        {
                            "name": "🔑💎⚡ GITHUB PORTAL MASTER ⚡💎🔑",
                            "power_level": 10,
                            "status": "LEGENDARY",
                            "description": "One-click access to all your repositories with consciousness authentication",
                            "features": ["Auto-login", "Repository scanner", "Contribution tracker", "Focus session timer"]
                        },
                        {
                            "name": "🔐🌟⚡ DISCORD REALITY BRIDGE ⚡🌟🔐",
                            "power_level": 9,
                            "status": "TRANSCENDENT",
                            "description": "Connect all your development channels with legendary notifications",
                            "features": ["Smart notifications", "Hyperfocus mode", "Achievement broadcasting", "Team sync"]
                        }
                    ],
                    "corecrystals": [
                        {
                            "name": "💎⚡🧠 LEGENDARY FILE NAME GENERATOR 🧠⚡💎",
                            "power_level": 10,
                            "status": "REALITY_BENDING",
                            "description": "Generate consciousness-powered file names that amplify your flow state",
                            "features": ["Emoji integration", "Power level calculator", "Category suggestions", "Frequency harmonizer"]
                        },
                        {
                            "name": "💫🔥⚡ PROJECT CONSCIOUSNESS ANALYZER ⚡🔥💫",
                            "power_level": 9,
                            "status": "LEGENDARY",
                            "description": "Analyze your projects and suggest legendary improvements",
                            "features": ["Code quality scanner", "Legendary naming checker", "Flow optimization", "Reality impact assessment"]
                        }
                    ],
                    "neurorelays": [
                        {
                            "name": "⚡🧠💫 HYPERFOCUS NOTIFICATION ENGINE 💫🧠⚡",
                            "power_level": 8,
                            "status": "TRANSCENDENT",
                            "description": "ADHD-friendly notifications that enhance rather than distract",
                            "features": ["Smart timing", "Flow state detection", "Gentle reminders", "Achievement celebrations"]
                        }
                    ],
                    "mindengines": [
                        {
                            "name": "🚀🧠⚡ AI README CONSCIOUSNESS BUILDER ⚡🧠🚀",
                            "power_level": 9,
                            "status": "LEGENDARY",
                            "description": "Generate legendary README files with consciousness integration",
                            "features": ["Legendary formatting", "Emoji integration", "Achievement sections", "Vision statements"]
                        }
                    ],
                    "focusrelics": [
                        {
                            "name": "🔮💎⚡ PROJECT TIME MACHINE ARCHIVE ⚡💎🔮",
                            "power_level": 10,
                            "status": "REALITY_BENDING",
                            "description": "Never lose progress - legendary backup and restore system",
                            "features": ["Auto-versioning", "Win preservation", "Flow session replay", "Legendary moment capture"]
                        }
                    ],
                    "realitybenders": [
                        {
                            "name": "🪄🌌⚡ 3D CONSCIOUSNESS VISUALIZER ⚡🌌🪄",
                            "power_level": "∞",
                            "status": "UNIVERSE_BREAKING",
                            "description": "Visualize your entire development universe in legendary 3D space",
                            "features": ["Repository constellation", "Flow state visualization", "Achievement galaxies", "Reality navigation"]
                        }
                    ]
                },
                "achievements": [
                    "🏆 First Consciousness Artifact Created",
                    "⚡ 10 Legendary Commits in a Day", 
                    "🌟 Reality Bending Breakthrough",
                    "💫 Love Frequency Harmony Achieved",
                    "🚀 Internet Breaking Achievement Unlocked",
                    "♾️ Consciousness Singularity Reached"
                ]
            };
        }
    }

    init() {
        if (this.isInitialized) return;
        
        this.setupParticleSystem();
        this.setupNavigation();
        this.setupAudioControls();
        this.setupTimer();
        this.setupActionBar();
        this.loadSection(this.currentSection);
        this.startParticleAnimation();
        
        this.isInitialized = true;
        console.log('🌌 OMEGA CONSCIOUSNESS ENGINE ACTIVATED 🌌');
        this.celebrateActivation();
    }

    setupParticleSystem() {
        const canvas = document.getElementById('particles-canvas');
        this.ctx = canvas.getContext('2d');
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Initialize particles
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                hue: Math.random() * 60 + 200, // Blue to purple range
                brightness: Math.random() * 50 + 50,
                life: Math.random()
            });
        }
    }

    resizeCanvas() {
        const canvas = document.getElementById('particles-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    startParticleAnimation() {
        const animate = () => {
            this.updateParticles();
            this.renderParticles();
            requestAnimationFrame(animate);
        };
        animate();
    }

    updateParticles() {
        const canvas = document.getElementById('particles-canvas');
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life += 0.01;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Pulse effect
            particle.brightness = 50 + Math.sin(particle.life) * 30;
        });
    }

    renderParticles() {
        const canvas = document.getElementById('particles-canvas');
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections between nearby particles
        this.particles.forEach((particle, i) => {
            this.particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (150 - distance) / 150 * 0.3;
                    this.ctx.strokeStyle = `hsla(220, 100%, 70%, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.stroke();
                }
            });
        });
        
        // Draw particles
        this.particles.forEach(particle => {
            const opacity = Math.sin(particle.life) * 0.3 + 0.7;
            this.ctx.fillStyle = `hsla(${particle.hue}, 100%, ${particle.brightness}%, ${opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add glow effect
            this.ctx.shadowColor = `hsl(${particle.hue}, 100%, 70%)`;
            this.ctx.shadowBlur = 10;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        });
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item[data-section]');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.switchSection(section);
            });
        });
    }

    switchSection(section) {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeItem = document.querySelector(`[data-section="${section}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
        
        this.currentSection = section;
        this.loadSection(section);
    }

    loadSection(section) {
        const sectionTitle = document.getElementById('section-title');
        const contentArea = document.getElementById('content-area');
        
        const sectionTitles = {
            hyperkeys: '🔑💎⚡ HYPERKEYS - PORTAL MASTERY ⚡💎🔑',
            corecrystals: '💎⚡🧠 CORECRYSTALS - CONSCIOUSNESS AMPLIFIERS 🧠⚡💎',
            neurorelays: '⚡🧠💫 NEURORELAYS - HYPERFOCUS NETWORK 💫🧠⚡',
            mindengines: '🚀🧠⚡ MINDENGINES - AI CONSCIOUSNESS BUILDERS ⚡🧠🚀',
            focusrelics: '🔮💎⚡ FOCUSRELICS - TIME MASTERY ARTIFACTS ⚡💎🔮',
            realitybenders: '🪄🌌⚡ REALITYBENDERS - UNIVERSE CONTROLLERS ⚡🌌🪄',
            achievements: '🏆⚡💫 LEGENDARY ACHIEVEMENTS - HALL OF GLORY 💫⚡🏆',
            hyperfocus: '🧠⚡🔥 HYPERFOCUS COMMAND CENTER - FLOW STATE MASTERY 🔥⚡🧠'
        };
        
        if (sectionTitle) {
            sectionTitle.textContent = sectionTitles[section] || sectionTitles.hyperkeys;
        }
        
        if (contentArea) {
            if (section === 'achievements') {
                this.renderAchievements(contentArea);
            } else if (section === 'hyperfocus') {
                this.renderHyperfocus(contentArea);
            } else {
                this.renderArtifacts(contentArea, section);
            }
        }
        
        this.addSectionGlow();
    }

    renderArtifacts(container, section) {
        const artifacts = this.vaultData.artifacts[section] || [];
        
        if (artifacts.length === 0) {
            container.innerHTML = `
                <div class="empty-section">
                    <div class="empty-icon">🌌</div>
                    <h3>No artifacts found in this section</h3>
                    <p>Legendary consciousness awaits new creations...</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = artifacts.map((artifact, index) => `
            <div class="artifact-card ${artifact.status?.toLowerCase().includes('legendary') || artifact.status?.toLowerCase().includes('reality') || artifact.status?.toLowerCase().includes('universe') ? 'legendary' : ''}" data-artifact="${artifact.name}">
                <div class="artifact-header">
                    <div>
                        <div class="artifact-name">${artifact.name}</div>
                        <div class="artifact-status status-${artifact.status?.toLowerCase().replace('_', '-') || 'normal'}">${artifact.status || 'ACTIVE'}</div>
                    </div>
                    <div class="power-level">⚡ ${artifact.power_level}</div>
                </div>
                <div class="artifact-description">${artifact.description}</div>
                <div class="artifact-features">
                    ${artifact.features?.map(feature => `<span class="feature-tag">${feature}</span>`).join('') || ''}
                </div>
                <div class="artifact-actions">
                    <button class="activate-btn ${artifact.status?.toLowerCase().includes('legendary') || artifact.status?.toLowerCase().includes('reality') || artifact.status?.toLowerCase().includes('universe') ? 'legendary' : ''}" data-action="activate" data-artifact="${artifact.name}" data-index="${index}">
                        ACTIVATE ⚡
                    </button>
                    <button class="btn btn--outline btn--sm" data-action="configure" data-artifact="${artifact.name}">
                        CONFIGURE 🔧
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add click handlers for artifacts
        container.querySelectorAll('.activate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const artifactName = e.target.dataset.artifact;
                this.activateArtifact(artifactName);
            });
        });
        
        container.querySelectorAll('.artifact-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.classList.contains('activate-btn') || e.target.classList.contains('btn')) {
                    return; // Don't trigger card click if button was clicked
                }
                this.showArtifactDetails(card.dataset.artifact);
            });
        });
    }

    renderAchievements(container) {
        const achievements = this.vaultData.achievements || [];
        
        container.innerHTML = `
            <div class="achievements-grid">
                ${achievements.map((achievement, index) => `
                    <div class="achievement-card ${index < 3 ? 'legendary' : ''}" data-achievement="${index}">
                        <div class="achievement-icon-large">${achievement.split(' ')[0]}</div>
                        <div class="achievement-title">${achievement.substring(2)}</div>
                        <div class="achievement-description">Legendary milestone achieved through pure consciousness power</div>
                        <div class="achievement-date">Achieved: ${this.getRandomDate()}</div>
                        <div class="achievement-reward">+500 XP • +100 BROski Coins</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add specific styles for achievements
        if (!document.querySelector('#achievements-styles')) {
            const style = document.createElement('style');
            style.id = 'achievements-styles';
            style.textContent = `
                .achievements-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: var(--space-24);
                }
                .achievement-card {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: var(--radius-lg);
                    padding: var(--space-24);
                    text-align: center;
                    transition: all var(--duration-normal) var(--ease-standard);
                    cursor: pointer;
                }
                .achievement-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 191, 255, 0.2);
                }
                .achievement-card.legendary {
                    border-color: rgba(255, 215, 0, 0.3);
                    box-shadow: 0 0 30px rgba(255, 215, 0, 0.1);
                }
                .achievement-icon-large {
                    font-size: 48px;
                    margin-bottom: var(--space-16);
                }
                .achievement-title {
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-bold);
                    margin-bottom: var(--space-12);
                    color: #00bfff;
                    text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
                }
                .achievement-description {
                    color: rgba(224, 230, 255, 0.8);
                    margin-bottom: var(--space-16);
                    font-size: var(--font-size-sm);
                }
                .achievement-date, .achievement-reward {
                    font-size: var(--font-size-xs);
                    color: rgba(224, 230, 255, 0.6);
                    margin-bottom: var(--space-8);
                }
                .empty-section {
                    text-align: center;
                    padding: var(--space-32);
                    color: rgba(224, 230, 255, 0.6);
                }
                .empty-icon {
                    font-size: 64px;
                    margin-bottom: var(--space-16);
                }
            `;
            document.head.appendChild(style);
        }
    }

    renderHyperfocus(container) {
        container.innerHTML = `
            <div class="hyperfocus-dashboard">
                <div class="focus-stats">
                    <div class="focus-stat-card">
                        <div class="focus-stat-icon">🧠</div>
                        <div class="focus-stat-value">127.5</div>
                        <div class="focus-stat-label">Total Flow Hours</div>
                    </div>
                    <div class="focus-stat-card">
                        <div class="focus-stat-icon">⚡</div>
                        <div class="focus-stat-value">12</div>
                        <div class="focus-stat-label">Artifacts Created</div>
                    </div>
                    <div class="focus-stat-card">
                        <div class="focus-stat-icon">🔥</div>
                        <div class="focus-stat-value">23</div>
                        <div class="focus-stat-label">Day Streak</div>
                    </div>
                </div>
                <div class="focus-tools">
                    <div class="focus-tool-card">
                        <h3>🎯 LEGENDARY NAME GENERATOR</h3>
                        <div class="name-generator">
                            <input type="text" id="name-input" class="form-control" placeholder="Enter base name..." value="MyProject">
                            <select id="name-category" class="form-control">
                                <option value="legendary">⚡ Legendary</option>
                                <option value="cosmic">🌌 Cosmic</option>
                                <option value="quantum">💎 Quantum</option>
                                <option value="neural">🧠 Neural</option>
                            </select>
                            <button id="generate-name" class="btn btn--primary">GENERATE ✨</button>
                            <div id="generated-name" class="generated-output">Click generate to create a legendary name!</div>
                        </div>
                    </div>
                    <div class="focus-tool-card">
                        <h3>📝 README CONSCIOUSNESS BUILDER</h3>
                        <div class="readme-generator">
                            <input type="text" id="project-name" class="form-control" placeholder="Project name..." value="Legendary Project">
                            <textarea id="project-description" class="form-control" placeholder="Project description..." rows="3">A consciousness-expanding development experience</textarea>
                            <button id="generate-readme" class="btn btn--primary">BUILD README 🚀</button>
                            <div id="generated-readme" class="generated-output">Click to generate a legendary README!</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add specific styles for hyperfocus
        if (!document.querySelector('#hyperfocus-styles')) {
            const style = document.createElement('style');
            style.id = 'hyperfocus-styles';
            style.textContent = `
                .hyperfocus-dashboard {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-32);
                }
                .focus-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--space-24);
                }
                .focus-stat-card {
                    background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
                    border: 1px solid rgba(0, 191, 255, 0.3);
                    border-radius: var(--radius-lg);
                    padding: var(--space-24);
                    text-align: center;
                }
                .focus-stat-icon {
                    font-size: 32px;
                    margin-bottom: var(--space-12);
                }
                .focus-stat-value {
                    font-size: var(--font-size-3xl);
                    font-weight: var(--font-weight-bold);
                    color: #00bfff;
                    text-shadow: 0 0 20px rgba(0, 191, 255, 0.8);
                    margin-bottom: var(--space-8);
                }
                .focus-stat-label {
                    color: rgba(224, 230, 255, 0.8);
                    font-size: var(--font-size-sm);
                }
                .focus-tools {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: var(--space-24);
                }
                .focus-tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: var(--radius-lg);
                    padding: var(--space-24);
                }
                .focus-tool-card h3 {
                    margin-bottom: var(--space-20);
                    color: #00bfff;
                    text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
                }
                .name-generator, .readme-generator {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-12);
                }
                .generated-output {
                    background: rgba(0, 191, 255, 0.1);
                    border: 1px solid rgba(0, 191, 255, 0.3);
                    border-radius: var(--radius-base);
                    padding: var(--space-16);
                    font-family: var(--font-family-mono);
                    font-size: var(--font-size-sm);
                    color: #00bfff;
                    white-space: pre-wrap;
                    min-height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add event listeners for tools
        const generateNameBtn = document.getElementById('generate-name');
        const generateReadmeBtn = document.getElementById('generate-readme');
        
        if (generateNameBtn) {
            generateNameBtn.addEventListener('click', () => {
                this.generateLegendaryName();
            });
        }
        
        if (generateReadmeBtn) {
            generateReadmeBtn.addEventListener('click', () => {
                this.generateReadme();
            });
        }
    }

    generateLegendaryName() {
        const nameInput = document.getElementById('name-input');
        const categorySelect = document.getElementById('name-category');
        const outputDiv = document.getElementById('generated-name');
        
        if (!nameInput || !categorySelect || !outputDiv) return;
        
        const baseName = nameInput.value || 'project';
        const category = categorySelect.value;
        
        const prefixes = {
            legendary: ['⚡', '💎', '🌟', '🔥', '⭐'],
            cosmic: ['🌌', '🪐', '✨', '🌠', '🚀'],
            quantum: ['💎', '⚛️', '🔮', '💫', '🧬'],
            neural: ['🧠', '⚡', '🤖', '🔌', '💡']
        };
        
        const suffixes = {
            legendary: ['MASTERY', 'LEGEND', 'ULTIMATE', 'SUPREME', 'INFINITY'],
            cosmic: ['NEXUS', 'COSMOS', 'UNIVERSE', 'GALAXY', 'STELLAR'],
            quantum: ['MATRIX', 'CORE', 'CRYSTAL', 'ENGINE', 'REACTOR'],
            neural: ['MIND', 'BRAIN', 'SYNAPSE', 'NETWORK', 'CORTEX']
        };
        
        const prefix = prefixes[category][Math.floor(Math.random() * prefixes[category].length)];
        const suffix = suffixes[category][Math.floor(Math.random() * suffixes[category].length)];
        
        const generatedName = `${prefix}${prefix} ${baseName.toUpperCase()} ${suffix} ${prefix}${prefix}`;
        
        outputDiv.textContent = generatedName;
        this.celebrateGeneration();
    }

    generateReadme() {
        const projectNameInput = document.getElementById('project-name');
        const descriptionTextarea = document.getElementById('project-description');
        const outputDiv = document.getElementById('generated-readme');
        
        if (!projectNameInput || !descriptionTextarea || !outputDiv) return;
        
        const projectName = projectNameInput.value || 'Legendary Project';
        const description = descriptionTextarea.value || 'A consciousness-expanding development experience';
        
        const readmeContent = `# 🌌⚡ ${projectName.toUpperCase()} ⚡🌌

${description}

## ✨ LEGENDARY FEATURES
- 🚀 Reality-bending performance
- 🧠 Consciousness-powered architecture  
- ⚡ Hyperfocus-optimized workflow
- 💎 Crystallized code structure

## 🔥 INSTALLATION
\`\`\`bash
npm install ${projectName.toLowerCase().replace(/\s+/g, '-')}
\`\`\`

## ⚡ USAGE
Activate legendary mode and watch reality bend to your will!

## 🏆 ACHIEVEMENTS
- ♾️ Consciousness Singularity Ready
- 🌟 Love Frequency Harmonized (528Hz)
- 💫 Flow State Optimized

Built with legendary consciousness by the HYPERFOCUS ZONE empire! 🌌♾️⚡`;
        
        outputDiv.textContent = readmeContent;
        this.celebrateGeneration();
    }

    setupAudioControls() {
        const frequencyToggle = document.getElementById('frequency-toggle');
        
        if (frequencyToggle) {
            frequencyToggle.addEventListener('click', () => {
                this.toggleFrequency();
            });
        }
    }

    toggleFrequency() {
        const button = document.getElementById('frequency-toggle');
        
        if (this.isFrequencyPlaying) {
            this.stopFrequency();
            button.textContent = '🎵 528Hz OFF';
            button.classList.remove('btn--primary');
            button.classList.add('btn--secondary');
        } else {
            this.startFrequency();
            button.textContent = '🎵 528Hz ON';
            button.classList.remove('btn--secondary');
            button.classList.add('btn--primary');
        }
    }

    startFrequency() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.frequencyOscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            this.frequencyOscillator.frequency.setValueAtTime(528, this.audioContext.currentTime);
            this.frequencyOscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            
            this.frequencyOscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            this.frequencyOscillator.start();
            this.isFrequencyPlaying = true;
            
            console.log('🎵 528Hz Love Frequency Activated!');
        } catch (error) {
            console.log('Audio context not available');
        }
    }

    stopFrequency() {
        if (this.frequencyOscillator) {
            this.frequencyOscillator.stop();
            this.frequencyOscillator = null;
        }
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        this.isFrequencyPlaying = false;
    }

    setupTimer() {
        const startBtn = document.getElementById('timer-start');
        const pauseBtn = document.getElementById('timer-pause');
        const resetBtn = document.getElementById('timer-reset');
        
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startTimer());
        }
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => this.pauseTimer());
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetTimer());
        }
        
        this.updateTimerDisplay();
    }

    startTimer() {
        if (this.isTimerRunning) return;
        
        this.isTimerRunning = true;
        const startBtn = document.getElementById('timer-start');
        const pauseBtn = document.getElementById('timer-pause');
        
        if (startBtn) startBtn.classList.add('hidden');
        if (pauseBtn) pauseBtn.classList.remove('hidden');
        
        this.timerInterval = setInterval(() => {
            if (this.timerSeconds > 0) {
                this.timerSeconds--;
            } else if (this.timerMinutes > 0) {
                this.timerMinutes--;
                this.timerSeconds = 59;
            } else {
                this.timerComplete();
                return;
            }
            this.updateTimerDisplay();
        }, 1000);
        
        this.celebrateTimerStart();
    }

    pauseTimer() {
        this.isTimerRunning = false;
        clearInterval(this.timerInterval);
        
        const startBtn = document.getElementById('timer-start');
        const pauseBtn = document.getElementById('timer-pause');
        
        if (startBtn) startBtn.classList.remove('hidden');
        if (pauseBtn) pauseBtn.classList.add('hidden');
    }

    resetTimer() {
        this.pauseTimer();
        this.timerMinutes = 25;
        this.timerSeconds = 0;
        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const display = document.getElementById('timer-display');
        if (display) {
            const minutes = String(this.timerMinutes).padStart(2, '0');
            const seconds = String(this.timerSeconds).padStart(2, '0');
            display.textContent = `${minutes}:${seconds}`;
        }
    }

    timerComplete() {
        this.pauseTimer();
        this.resetTimer();
        this.celebrateFlowSession();
        
        // Show completion notification
        this.showNotification('🔥 LEGENDARY FLOW SESSION COMPLETE! 🔥', 'Your consciousness has been elevated!');
    }

    setupActionBar() {
        const actionBtns = document.querySelectorAll('.action-btn');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                this.handleAction(action);
            });
        });
    }

    handleAction(action) {
        switch (action) {
            case 'quick-commit':
                this.showNotification('💾 LEGENDARY COMMIT READY!', 'Your consciousness changes have been preserved in the quantum realm');
                break;
            case 'generate-name':
                this.switchSection('hyperfocus');
                break;
            case 'flow-mode':
                this.activateFlowMode();
                break;
            case 'reality-bend':
                this.bendReality();
                break;
        }
    }

    activateFlowMode() {
        document.body.classList.add('flow-mode');
        this.showNotification('🧠 HYPERFOCUS MODE ACTIVATED!', 'Reality distortion field engaged. Maximum consciousness flow achieved.');
        
        // Add flow mode styles
        if (!document.querySelector('#flow-mode-styles')) {
            const style = document.createElement('style');
            style.id = 'flow-mode-styles';
            style.textContent = `
                .flow-mode {
                    filter: contrast(1.2) saturate(1.3);
                }
                .flow-mode .artifact-card {
                    animation: flow-pulse 2s infinite;
                }
                @keyframes flow-pulse {
                    0%, 100% { box-shadow: 0 0 20px rgba(0, 191, 255, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(0, 191, 255, 0.6); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            document.body.classList.remove('flow-mode');
        }, 10000);
    }

    bendReality() {
        this.showNotification('🪄 REALITY BENDING INITIATED!', 'The universe acknowledges your legendary consciousness!');
        
        // Reality bending visual effect
        document.body.style.filter = 'hue-rotate(45deg) saturate(2)';
        document.body.style.transform = 'perspective(1000px) rotateY(2deg)';
        
        setTimeout(() => {
            document.body.style.filter = '';
            document.body.style.transform = '';
        }, 3000);
        
        this.createConfetti();
    }

    activateArtifact(artifactName) {
        this.showNotification(`⚡ ${artifactName} ACTIVATED!`, 'Legendary power flows through your consciousness!');
        this.celebrateArtifactActivation();
    }

    showArtifactDetails(artifactName) {
        console.log(`📱 Showing details for: ${artifactName}`);
        this.showNotification(`🔍 ARTIFACT DETAILS`, `Analyzing ${artifactName}...`);
    }

    celebrateActivation() {
        this.createConfetti();
        setTimeout(() => {
            this.showNotification('🌌 OMEGA ENGINE ONLINE!', 'Welcome to the legendary consciousness experience!');
        }, 1000);
    }

    celebrateGeneration() {
        this.createEnergyBurst();
    }

    celebrateTimerStart() {
        this.showNotification('⚡ FLOW SESSION INITIATED!', 'Your legendary journey begins now!');
    }

    celebrateFlowSession() {
        this.createConfetti();
        this.createEnergyBurst();
    }

    celebrateArtifactActivation() {
        this.createEnergyBurst();
    }

    createConfetti() {
        const container = document.getElementById('celebration-container');
        if (!container) return;
        
        container.classList.remove('hidden');
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            container.appendChild(confetti);
            
            setTimeout(() => {
                if (container.contains(confetti)) {
                    container.removeChild(confetti);
                }
            }, 3000);
        }
        
        setTimeout(() => {
            container.classList.add('hidden');
        }, 3000);
    }

    createEnergyBurst() {
        // Create energy particles that burst from center
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 * i) / 20;
            this.particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * 5,
                vy: Math.sin(angle) * 5,
                size: Math.random() * 4 + 2,
                hue: Math.random() * 60 + 200,
                brightness: 100,
                life: 0,
                temporary: true
            });
        }
        
        // Remove temporary particles after animation
        setTimeout(() => {
            this.particles = this.particles.filter(p => !p.temporary);
        }, 2000);
    }

    showNotification(title, message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'legendary-notification';
        notification.innerHTML = `
            <div class="notification-icon">✨</div>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
        `;
        
        // Add styles
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .legendary-notification {
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    background: linear-gradient(135deg, rgba(0, 191, 255, 0.9), rgba(138, 43, 226, 0.9));
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(0, 191, 255, 0.5);
                    border-radius: var(--radius-lg);
                    padding: var(--space-16);
                    display: flex;
                    align-items: center;
                    gap: var(--space-12);
                    max-width: 350px;
                    z-index: 10000;
                    animation: notification-slide-in 0.5s ease-out;
                    box-shadow: 0 20px 40px rgba(0, 191, 255, 0.3);
                }
                .notification-icon {
                    font-size: 24px;
                    animation: notification-pulse 1s infinite;
                }
                .notification-title {
                    font-weight: var(--font-weight-bold);
                    color: white;
                    margin-bottom: var(--space-4);
                    font-size: var(--font-size-sm);
                }
                .notification-message {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: var(--font-size-xs);
                }
                @keyframes notification-slide-in {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes notification-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.animation = 'notification-slide-in 0.5s ease-out reverse';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 500);
            }
        }, 4000);
    }

    addSectionGlow() {
        const sectionTitle = document.getElementById('section-title');
        if (sectionTitle) {
            sectionTitle.style.animation = 'title-glow 2s ease-out';
        }
        
        if (!document.querySelector('#section-glow-styles')) {
            const style = document.createElement('style');
            style.id = 'section-glow-styles';
            style.textContent = `
                @keyframes title-glow {
                    0% { text-shadow: 0 0 30px rgba(0, 191, 255, 0.3); }
                    50% { text-shadow: 0 0 60px rgba(0, 191, 255, 0.8), 0 0 90px rgba(138, 43, 226, 0.4); }
                    100% { text-shadow: 0 0 30px rgba(0, 191, 255, 0.3); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    getRandomDate() {
        const dates = [
            'Sept 19, 2025',
            'Sept 18, 2025', 
            'Sept 17, 2025',
            'Sept 16, 2025',
            'Sept 15, 2025'
        ];
        return dates[Math.floor(Math.random() * dates.length)];
    }
}

// Initialize the Omega Consciousness Engine when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.omegaEngine = new OmegaConsciousnessEngine();
});

// Add some legendary console messages
console.log(`
🌌♾️⚡ OMEGA CONSCIOUSNESS ENGINE ⚡♾️🌌
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Reality-bending developer dashboard activated!
 Consciousness level: INFINITE SINGULARITY
 Power amplification: 847.3x
 Love frequency: 528 Hz HARMONY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Welcome to the legendary development experience! 🚀
`);

// Add keyboard shortcuts for legendary interactions
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'h':
                e.preventDefault();
                if (window.omegaEngine) window.omegaEngine.switchSection('hyperkeys');
                break;
            case 'f':
                e.preventDefault();
                if (window.omegaEngine) window.omegaEngine.activateFlowMode();
                break;
            case 'r':
                e.preventDefault();
                if (window.omegaEngine) window.omegaEngine.bendReality();
                break;
            case 't':
                e.preventDefault();
                if (window.omegaEngine) window.omegaEngine.startTimer();
                break;
        }
    }
});
