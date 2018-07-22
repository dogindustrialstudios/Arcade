var SideMenuShow = 1;
var Screen = "Start";

function Start() {
  if (Name == null) {
    Name = random(DefultNames);
    localStorage.setItem("Name", Name);
  }
  if (ArcadeCoins == null || ArcadeCoins < 1) {
    localStorage.setItem("ArcadeMoney", 0);
    ArcadeCoins = "Broke";
  }
  if (ArcadeRecentBuy == null) {
    ArcadeRecentBuy = "No Recent Purchaces";
  }
}
function preload() {
  if (localStorage.ProfilePicture == null) {
  profilepic = loadImage("https://image.flaticon.com/icons/png/512/281/281756.png");
  }
  else {
  profilepic = loadImage(localStorage.ProfilePicture);
  }
}
function SideMenuUpdate() {
  if (SideMenuShow == 1) {
    fill(500);
    rect(300,-1,5,800);
    if (Screen == "PersonalInfo") {
      textSize(25);
      fill(500);
      text('[Your Account]',10,100,290);
    } else {
    	textSize(25);
      fill(500);
      text('Your Account',20,100,290);
    }
    if (Screen == "Money") {
      textSize(25);
      fill(500);
      text('[Money]',10,130,290);
    } else {
    	textSize(25);
      fill(500);
      text('Money',20,130,290);
    }
    if (Screen == "WindowsUSettings") {
      textSize(25);
      fill(500);
      text('[WinUSetting]',10,160,290);
    } else {
    	textSize(25);
      fill(500);
      text('WinUSetting',20,160,290);
    }
  } else {
    textSize(10);
    fill(500);
    text('Press Q to Open',10,20);
  }
}
function ScreenScheck() {
  if (Screen == "Start") {
    Start();
    Screen = "PersonalInfo";
  }
  if (Screen == "PersonalInfo") {
    fill(500);
    textSize(34);
    text('Name',500,100);
    textSize(20);
    text('- press N to change',600,100);
		textSize(20);
    text(Name,500,130);
    textSize(34);
    text("Profile Picture",800,100);
    image(profilepic,800,110,200,200);
    textSize(20);
    text("Press P to change",810,330);
    textSize(34);
    text('Plan',500,200);
    textSize(20);
    text(GamePass,500,230);
  }
  if (Screen == "Money") {
    fill(500);
    textSize(34);
    text('Aracade Coins',500,100);
    textSize(20);
    text(ArcadeCoins,500,130);
    textSize(34);
    text('Last Purchase',500,200);
    textSize(20);
    text(ArcadeRecentBuy,500,230);
    if (ArcadeCoins == "Broke" && GamePass == "Premium" || GamePass == "Developer") {
      alert('You Seem to be poor.');
      alert('Let Me help.');
    	ArcadeCoins = 100;
    	localStorage.setItem("ArcadeCoins", ArcadeCoins);
    }
  }
}
function keyPressed() {
  if (keyCode == 81) {
  	if (SideMenuShow == 1) {
  	  SideMenuShow = 0;
    } else {SideMenuShow = 1;}
  }
  if (keyCode == 49) {
  	Screen = "PersonalInfo";
  }
  if (keyCode == 50) {
  	Screen = "Money";
  }
  if (keyCode == 51) {
  	Screen = "WindowsUSettings";
  }
  if (Screen == "PersonalInfo") {
    if (keyCode == 78) {
  	  Name = prompt('Type in your New Name');
      localStorage.setItem("Name", Name);
    }
    if (keyCode == 80) {
  	  var profileurl = prompt('Type in the url of the link ');
      toDataURL(profileurl, function(dataUrl) {
  			localStorage.ProfilePicture = dataUrl;
        //window.open("SeeProfilePic.html");
        window.location.href = '/Arcade/DataHandeler/';
      })
    }
  }
  if (Screen == "WindowsUSettings") {
    if (keyCode == 80) {
  	  WindowUAccountPassword = prompt('Type in your New Password');
      localStorage.setItem("WindowUAccountPassword", WindowUAccountPassword);
    }
  }
}

function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}
