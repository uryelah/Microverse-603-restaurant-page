const pageFactory = (title, content, transition) => {
  const getTitle = () => title;
  const getContent = () => content;
  function addToPage(putAt, withTransition = true) {
    if (withTransition) {
      putAt.outerHTML = content;
    } else {
      putAt.outerHTML = content; 
    }
    
    document.querySelector(`[name="${title}"]`).classList.add(transition)
  }
  function leavePage(removeMe) {
    removeMe.classList.remove(transition)
    removeMe.classList.add(transition + '-out')
  }
  return { getTitle, getContent, addToPage, leavePage };
};

export default pageFactory