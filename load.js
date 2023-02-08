function include(scriptcontainer,folder,scriptList) {
    scriptList.forEach(element => {
        document.getElementById(scriptcontainer).innerHTML += "<script src='"+folder+"/"+element+"'></script>"
    });
}