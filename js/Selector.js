self;
export function get(selector) {
  let self = document.querySelector(selector);

  self.text = (text) => {
    if (text) {
      self.textContent = text;
      return self;
    }
  };
  self.html = (html) => {
    if (html) {
      self.innerHTML = html;
      return self;
    }
    return self;
  };

  self.css = (styles) => {
    for (const key in styles) {
      self.style[key] = styles[key];
    }
    return self;
  };

  self.addClass = (...params) => {
    params.forEach((Class) => {
      self.classList.add(Class);
    });
    return self;
  };
  self.removeClass = (...params) => {
    params.forEach((Class) => {
      self.classList.remove(Class);
    });
    return self;
  };
  self.val = (values) => {
    if (values) {
      self.value = values;
      return self.value;
    }
    return self.value;
  };
  self.on = (eventName, callBack) => {
    self.addEventListener(eventName, callBack);
  };
  self.attr = (attr, val) => {
    if (attr && val) {
      self.setAttribute(attr, val);
      return self;
    }
    self.getAttribute(attr);
    return self;
  };

  self.append = (element, val) => {
    if (element && val!== " ") {
      let ele = document.createElement(element);
      ele.innerHTML = val;
      self.appendChild(ele);
      return self;
    } else {
      return undefined;
    }
  };

  return self;
}
export function getAll(selector) {
  self = document.querySelectorAll(selector);
  self.text = (text) => {
    if (text) {
      self.textContent = text;
      return self;
    }
  };
  self.html = (html) => {
    if (html) {
      self.innerHTML = html;
      return self;
    }
    return self;
  };

  self.css = (styles) => {
    for (const key in styles) {
      self.style[key] = styles[key];
    }
    return self;
  };

  self.addClass = (...params) => {
    params.forEach((Class) => {
      self.classList.add(Class);
    });
    return self;
  };
  self.removeClass = (...params) => {
    params.forEach((Class) => {
      self.classList.remove(Class);
    });
    return self;
  };

  self.on = (eventName, callBack) => {
    self.addEventListener(eventName, callBack);
  };
  self.attr = (attr, val) => {
    if (attr && val) {
      self.setAttribute(attr, val);
      return self;
    }
    self.getAttribute(attr);
    return self;
  };

  return self;
}
