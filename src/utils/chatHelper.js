import randomstring from 'randomstring';

export function generateNewUser() {
  const id = Math.floor(Math.random() * 100);
  const generatedUserName = `User_${id}`;
  const p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(generatedUserName), 500);
  });
  return p;
}

export function generateNewChat() {
  const id = Math.floor(Math.random() * 100);
  const generatedUserName = `User_${id}`;
  const message = randomstring.generate();
  const chatMessage = {
    userName: generatedUserName,
    message: message
  };
  const p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(chatMessage), 500);
  });
  return p;
}


export function generateResponse(userName) {
  const message = randomstring.generate();
  const chatMessage = {
    userName: userName,
    message: message
  };
  const p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(chatMessage), 500);
  });
  return p;
}
