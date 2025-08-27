// Hackathon Dashboard JavaScript
class Dashboard {
  constructor() {
    this.init();
    this.setupEventListeners();
    this.startAnimations();
    this.setupProgressAnimation();
  }

  init() {
    console.log("🚀 Sustainathon 2025 Dashboard Initialized");
    this.updateTimeRemaining();
    this.animateStats();
  }

  setupEventListeners() {
    // Add hover effects to cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        this.addCardGlow(card);
      });

      card.addEventListener("mouseleave", () => {
        this.removeCardGlow(card);
      });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        this.addClickEffect(e.currentTarget);
        this.addGlitchEffect(e.currentTarget);
      });
    });

    // Status indicators animation
    this.animateStatusIndicators();
  }

  addGlitchEffect(element) {
    // Clear any existing glitch animation
    element.classList.remove("glitch");
    void element.offsetWidth; // Force reflow
    element.classList.add("glitch");

    // Clean up after animation
    setTimeout(() => {
      element.classList.remove("glitch");
    }, 300);
  }

  addCardGlow(card) {
    const hudElement = card.querySelector(".hud-element");
    if (hudElement) hudElement.classList.add("glow");
  }
  removeCardGlow(card) {
    const hudElement = card.querySelector(".hud-element");
    if (hudElement) hudElement.classList.remove("glow");
  }

  addClickEffect(button) {
    // Remove any existing click animation
    button.classList.remove("btn-clicked");
    void button.offsetWidth; // Force reflow
    button.classList.add("btn-clicked");

    setTimeout(() => {
      button.classList.remove("btn-clicked");
    }, 150);
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification-toast ${type}`;

    const iconMap = {
      success: "✓",
      error: "✗",
      warning: "⚠",
      info: "ℹ",
    };

    notification.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${iconMap[type]}</span>
      <span>${message}</span>
    </div>
  `;

    // Add to DOM
    document.body.appendChild(notification);

    // Auto remove after 4 seconds with animation
    setTimeout(() => {
      notification.classList.add("removing");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300); // Wait for exit animation
    }, 4000);

    // Add styles with custom color scheme
    const bgColors = {
      success: "rgba(240, 154, 65, 0.9)",
      error: "rgba(155, 89, 250, 0.9)",
      warning: "rgba(240, 154, 65, 0.9)",
      info: "rgba(126, 148, 179, 0.9)",
    };

    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColors[type] || bgColors.info};
            color: #0d1118;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 0 20px ${bgColors[type] || bgColors.info};
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
            min-width: 250px;
        `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 1000);

    // Remove after delay
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }

  setupProgressAnimation() {
    // Animate main progress bar
    const progressFill = document.querySelector(".progress-fill");
    if (progressFill) {
      progressFill.style.width = "0%";
      setTimeout(() => {
        progressFill.style.width = "65%";
      }, 1000);
    }

    // Animate individual progress bars
    const progressItems = document.querySelectorAll(".progress-item");
    progressItems.forEach((item, index) => {
      const fill = item.querySelector(".progress-fill");
      if (fill) {
        fill.style.width = "0%";
        setTimeout(() => {
          const targetWidth =
            fill.style.width ||
            fill.getAttribute("style").match(/width:\s*(\d+%)/)?.[1];
          if (targetWidth) {
            fill.style.width = targetWidth;
          }
        }, 1500 + index * 300);
      }
    });
  }

  animateStats() {
    const statNumbers = document.querySelectorAll(".stat-number");

    statNumbers.forEach((stat, index) => {
      const finalValue = parseInt(stat.textContent.replace(/,/g, ""));
      let currentValue = 0;
      const increment = Math.ceil(finalValue / 60); // Animate over ~2 seconds

      // Start animation with delay
      setTimeout(() => {
        const animation = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(animation);
          }
          stat.textContent = currentValue.toLocaleString();
        }, 33); // ~30fps
      }, index * 200);
    });
  }

  updateTimeRemaining() {
    const countdownElement = document.querySelector(".countdown-value");
    if (!countdownElement) return;

    let hours = 16;
    let minutes = 23;

    const updateTimer = () => {
      if (minutes > 0) {
        minutes--;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
      }

      const formattedTime = `${hours}h ${minutes.toString().padStart(2, "0")}m`;
      countdownElement.textContent = formattedTime;

      // Add urgency color changes using custom colors
      if (hours < 2) {
        countdownElement.style.color = "#9b59fa";
        countdownElement.style.textShadow = "0 0 10px rgba(155, 89, 250, 0.5)";
      } else if (hours < 6) {
        countdownElement.style.color = "#f09a41";
        countdownElement.style.textShadow = "0 0 10px rgba(240, 154, 65, 0.5)";
      }

      // Add pulsing effect when time is critical
      if (hours < 1) {
        countdownElement.style.animation = "pulse 1s infinite";
      }
    };

    // Update every minute (for demo, updating every 5 seconds)
    setInterval(updateTimer, 5000);
  }

  animateStatusIndicators() {
    const onlineStatus = document.querySelectorAll(".header-status");
    onlineStatus.forEach((status, index) => {
      setTimeout(() => {
        status.style.color = "#DC143C"; // or toggle green/red glow
      }, index * 100);
    });
  }

  startAnimations() {
    // Add CSS animations dynamically
    const style = document.createElement("style");
    style.textContent = `
            @keyframes glitch {
                0%, 100% { 
                    transform: translate(0);
                    filter: hue-rotate(0deg);
                }
                20% { 
                    transform: translate(-2px, 2px);
                    filter: hue-rotate(90deg);
                }
                40% { 
                    transform: translate(-2px, -2px);
                    filter: hue-rotate(180deg);
                }
                60% { 
                    transform: translate(2px, 2px);
                    filter: hue-rotate(270deg);
                }
                80% { 
                    transform: translate(2px, -2px);
                    filter: hue-rotate(360deg);
                }
            }
            
            @keyframes dataFlow {
                0% { 
                    opacity: 0;
                    transform: translateY(-10px);
                }
                50% { 
                    opacity: 1;
                }
                100% { 
                    opacity: 0;
                    transform: translateY(10px);
                }
            }
            
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .notification-toast .toast-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-toast .toast-icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(13, 17, 24, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #f09a41;
                font-weight: bold;
            }
            
            .notification-toast .toast-message {
                flex: 1;
                font-weight: 500;
            }
        `;
    document.head.appendChild(style);

    // Add particle effects
    this.createParticles();
  }

  createParticles() {
    const particleContainer = document.createElement("div");
    particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;

    document.body.appendChild(particleContainer);

    // Create floating particles with custom colors
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const colors = ["#f09a41", "#9b59fa", "#7e94b3"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                opacity: ${Math.random() * 0.6 + 0.2};
                border-radius: 50%;
                animation: float ${8 + Math.random() * 12}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                box-shadow: 0 0 ${size * 3}px ${color};
            `;

      particleContainer.appendChild(particle);
    }

    // Add float animation
    const floatStyle = document.createElement("style");
    floatStyle.textContent = `
            @keyframes float {
                0% { 
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% { 
                    opacity: 1;
                }
                90% { 
                    opacity: 1;
                }
                100% { 
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(floatStyle);
  }

  // Simulate real-time updates
  simulateRealTimeUpdates() {
    console.log("🔄 Starting real-time updates...");

    // Add new notifications periodically
    const notifications = [
      "⏱ 24-Hour sprint to build & present prototype.",
      "🎯 Judging: Innovation, tech skills, problem-solving, presentation & impact.",
      "🌍 Pick one theme: Green Tech, Energy, AI for Public Good, Digital Health, Cybersecurity, Agri/FoodTech, or Climate Solutions.",
      "🏆 Rewards: ₹3L+ prizes, grants, internships & PPOs.",
      "⏰ Submission deadline reminder: Time is running out!",
      "🏆 Leaderboard positions have shifted",
      "💡 Pro tip: Don't forget to test your application",
      "🎯 Pro tip: Focus on impact, Judges love real-world solutions.",
      "🌍 Pro tip: Pick one theme & stay consistent.",
      "🛠 Prototype > Presentation: Working demo wins!",
      "🤝 Teamwork matters: Divide & conquer tasks.",
    ];

    setInterval(() => {
      const randomNotification =
        notifications[Math.floor(Math.random() * notifications.length)];
      this.showNotification(randomNotification, "info");
    }, 10000); // Show random notification every minute
  }
}
