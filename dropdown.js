let dropdown = (trigger, parameter) => {
      this.trigger = trigger;
      this.parameter = parameter;
      let menu, triggerItem = document.querySelectorAll(this.trigger),
        configure = (el) => {
          let menu = el.parentNode.querySelector(this.parameter.menu),
            classL = menu.classList,
            eventType = this.parameter.type || "click",
            triggerType = eventType === "click" ? "click" : eventType === "hover" ? "mouseover" : "click",
            hidden = this.parameter.hidden ||  "true",
            autoPosition = this.parameter.autoPosition ||  "true",
            NavbarCollapse = this.parameter.NavbarCollapse ||  "false",
            showEffect = this.parameter.showEffect || "show",
            hiddenEffect = this.parameter.hiddenEffect || "out",
            waitingEffect = this.parameter.waitingEffect || null,
            menuHeight = this.parameter.height || "auto",
            menuWidth = this.parameter.width ||  "auto";

          el.addEventListener(triggerType, function() {
            let bodyRect = document.body.getBoundingClientRect(),
              elRect = this.getBoundingClientRect(),
              topQuery = () => {
                if (autoPosition === "true") {
                  let topQuery = elRect.top - menuHeight;
                  if (topQuery <= 0) {
                    if (classL.contains("dropup")) {
                      classL.remove("dropup");
                    }
                    menu.style.cssText = "position:absolute;transform:translateY(" + 0 + "px);";
                  } else {
                    if (!classL.contains("dropup")) {
                      classL.add("dropup");
                    }
                    menu.style.cssText = "position:absolute;transform:translateY(-" + (
                      0) + "px);";
                  }
                }
              },
              leftQuery = () => {
                if (autoPosition === "true") {
                  console.log(leftQuery, elRect.right)
                  if (elRect.right <= menuWidth) {
                    if (!classL.contains("dropright")) {
                      classL.remove("dropright");
                    }
                    menu.style.cssText = "position:absolute;transform:translatex(" + 0 + "px);";
                  } else if (elRect.left <= menuWidth) {
                    if (!classL.contains("dropleft")) {
                      classL.add("dropleft");
                    }
                    menu.style.cssText = "position:absolute;transform:translatex(-" + (
                      0) + "px);";
                  }
                }
              },
              toggles = () => {
                if (classL.contains(showEffect)) {
                  classL.add(hiddenEffect);
                  classL.remove(showEffect);
                  setTimeout(function() {
                    classL.remove(hiddenEffect);
                  }, "400");
                } else {
                  classL.add(showEffect);
                  menuHeight = menu.clientHeight;
                  menuWidth = menu.clientWidth;
                }
              },
              defaults = () => {
                toggles();
                topQuery();
                leftQuery();
                let clear = () => {
                  if (classL.contains(showEffect)) {
                    classL.add(hiddenEffect);
                    classL.remove(showEffect);
                    setTimeout(function() {
                      classL.remove(hiddenEffect);
                    }, "380");
                  }
                }
                if (hidden === "true") {
                  window.addEventListener("change", clear);
                  document.addEventListener("click", function(event) {
                    var isClickInside = el.contains(event.target) || menu.contains(event.target);
                    if (!isClickInside) {
                      clear();
                    }
                  }, false);
                }

              };
            if (el.getAttribute("data-collapse") === "dropdown") {
              if (window.innerWidth <= 769) {
                slide(menu).toggle(100);
              } else {
                defaults();
              }
              window.addEventListener("resize", function() {
                if (window.innerWidth >= 769) {
                  menu.removeAttribute("style");
                  defaults();
                }
              });
            } else {
              defaults();
            }

          });
        },
        run = (trigger) => {
          Array.prototype.forEach.call(triggerItem, function(el) {
            configure(el);
          });
        };
      return run(triggerItem);
    };
