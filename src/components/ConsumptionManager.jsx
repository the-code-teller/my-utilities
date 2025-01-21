import React, { useEffect, useRef } from "react";

const ConsumptionManagerComponent = () => {
  const mountedRef = useRef(true);
  const containerId = useRef(`my-widget-${Date.now()}`);

  useEffect(() => {
    // Configuration object
    const theme = {
      "fontFamily": "font-sans",
      "colors": {
          "primary": "#7F62F2",
          "checkbox": "#7F62F2",
          "success": "#5cd674",
          "danger": "#f00000",
          "warning": "#f0c000",
          "border": "#e0e0e0"
      },
      "header": {
          "fontWeight": "500",
          "fontSize": 18,
          "unselectedColor": "#A9A9A9",
          "selectedColor": "#7F62F2"
      },
      "subHeader": {
          "fontWeight": "500",
          "fontSize": 15,
          "unselectedColor": "#A9A9A9",
          "selectedColor": "#7F62F2"
      },
      "label": {
          "fontWeight": "600",
          "fontSize": 15,
          "color": "#374151"
      },
      "stubColumn": {
          "fontWeight": "800",
          "fontSize": 15,
          "color": "#374151",
          "backgroundColor": "#fafafa"
      },
      "table": {
          "fontWeight": "500",
          "fontSize": 15,
          "color": "#374151",
          "backgroundColor": "#fafafa"
      },
      "sectionHeader": {
          "fontWeight": "500",
          "fontSize": 15,
          "color": "#374151"
      },
      "placeholder": {
          "fontWeight": "800",
          "color": "#7F62F2"
      },
      "moduleCard": {
          "headerFontWeight": "500",
          "headerFontSize": 15,
          "headerColor": "#ffffff",
          "headerBackgroundColor": "#1e3a8a",
          "editIconColor": "#ffffff",
          "deleteIconColor": "#ffffff",
          "bodyBackgroundColor": "#ffffff"
      },
      "resourceCard": {
          "get": "#61affe",
          "post": "#49cc90",
          "put": "#fca130",
          "delete": "#f93e3e",
          "patch": "#50e3c2",
          "option": "#0d5aa7",
          "head": "#9012fe",
          "backgroundColor": "#ffffff"
      },
      "endpoint": {
          "fontWeight": "600",
          "fontSize": 15,
          "color": "#333333"
      },
      "method": {
          "fontWeight": "800",
          "fontSize": 11
      },
      "description": {
          "fontWeight": "300",
          "fontSize": 11,
          "color": "#333333"
      },
      "packageTile": {
          "backgroundColor": "#ffffff",
          "selectedBackgroundColor": "#ffffff",
          "imageFit": "cover",
          "headerFontWeight": "600",
          "headerFontSize": 18,
          "headerColor": "#333333",
          "descriptionFontWeight": "100",
          "descriptionFontSize": 12,
          "descriptionColor": "#333333",
          "timestampFontWeight": "400",
          "timestampFontSize": 12,
          "timestampColor": "#333333"
      }
    };

    const config = {
      "baseUrl": "https://iam.api.dev.vriti.ai",
      "appIdentifier": "804e1905238f313d3e53445775ba4d0c1407aa8d9835789d014a83f1f86b",
      "customerSecretKey": "ecd06990da272ec1e04a7b69f2981f150345cd4fc0af15fa1fbf47f13119",
      "tokenKey": "localstorage.token"
    };

    // Function to initialize ConsumptionManager
    const initializeManager = () => {
      if (typeof window.ConsumptionManager === 'function') {
        try {
          window.ConsumptionManager(containerId.current, config, theme);
        } catch (error) {
          console.error('Error initializing ConsumptionManager:', error);
        }
      } else {
        console.warn('ConsumptionManager not found. Please ensure it is properly loaded.');
      }
    };

    // Check if ConsumptionManager is already available
    if (window.ConsumptionManager) {
      initializeManager();
    } else {
      // Set up a MutationObserver to watch for the script being added
      const observer = new MutationObserver((mutations) => {
        if (window.ConsumptionManager) {
          observer.disconnect();
          initializeManager();
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });

      // Cleanup observer after 10 seconds to prevent memory leaks
      setTimeout(() => observer.disconnect(), 10000);
    }

    // Cleanup function
    return () => {
      mountedRef.current = false;

      try {
        // Clean up widget container
        const widgetContainer = document.getElementById(containerId.current);
        if (widgetContainer && widgetContainer.parentNode) {
          while (widgetContainer.firstChild) {
            widgetContainer.removeChild(widgetContainer.firstChild);
          }
        }

        // Cleanup any observers or timers if needed
      } catch (error) {
        console.error('Error during cleanup:', error);
      }
    };
  }, []);

  return <div id={containerId.current} className="consumption-manager-container" />;
};

export default ConsumptionManagerComponent;