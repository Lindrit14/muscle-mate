function getStat() {
    const stat = {};
  
    const elements = Array.from(document.forms[0].elements).filter(element => element.id)
  
    for (const element of elements) {
      const name = element.id;
  
      let value;
  
      if (name === "age" || name === "weight" || name === "weight") {
          value = Number(element.value);
      } else {
        value = element.value;
      }
  
      stat[name] = value;
    }
  
    return stat;
  }
  
  function putStat() {
    const statsofPerson = getStat();
  
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
      if (xhr.status == 200 || xhr.status === 204) {
        location.href = 'dashboard.html'
      } else {
        alert("Saving of stats data failed. Status code was " + xhr.status)
      }
    }
    
    xhr.open("PUT", "/stats/"+statsofPerson.username)
    xhr.setRequestHeader("Content-Type", "application/json")
  
    xhr.send(JSON.stringify(statsofPerson))
  }