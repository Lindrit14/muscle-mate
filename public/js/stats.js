function getStat() {
  const stat = {};

  const elements = Array.from(document.forms[0].elements).filter(element => element.id)

  for (const element of elements) {
    const name = element.id;

    let value;

    if (name === "age" || name === "weight" || name === "height") {
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
  
  xhr.open("PUT", "/stats")
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("Authorization", getCookie());
  xhr.send(JSON.stringify(statsofPerson))
}

function getCookie(){ 
  const x = document.cookie
  .split("; ")
  .find((row) => row.startsWith("token="))
  ?.split("=")[1];
  return x;
}

function checkIfLogged(){
  if(!getCookie()){
    return false;
  }
  return true;
}

window.onload = function() {
  if(!checkIfLogged()){
    window.location.href="/login.html";
  }
}