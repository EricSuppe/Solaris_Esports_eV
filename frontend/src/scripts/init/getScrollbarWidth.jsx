function getScrollbarWidth() {
    //creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    //creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    //calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  
    //removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    //save width
    document.querySelector("html").style = `--scrollbarWidth: ${scrollbarWidth}px`
  
}

export default getScrollbarWidth