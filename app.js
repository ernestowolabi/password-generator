const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let password1 = document.getElementById("password-field1") 
let password2 = document.getElementById("password-field2") 



function getNewCharacter() {
  let newCharacter = Math.floor(Math.random() * characters.length)
  return characters[newCharacter]

}

function newPassword() {
  let p1 = ""
  let p2 = ""
  
  for (let i = 0; i < 15; i++) {
    p1 += getNewCharacter()
    p2 += getNewCharacter()

    
  }
  console.log(p1, p2)
    password1.textContent = p1
    password2.textContent = p2

}

function copy1() {
  navigator.clipboard.writeText(password1.textContent);
  console.log("Password copied to clipboard")
}

function copy2() {
  navigator.clipboard.writeText(password2.textContent);
  console.log("Password copied to clipboard")
}







