export function print(msgList) {
    cosnole.error('I get called from print.js!');
    msgList.forEach(element => {
        console.log(element);        
   });
}