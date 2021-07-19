export function timeFormat(duration) {
  let hrs = ~~(duration / 3600);
  let mins = ~~((duration % 3600) / 60);
  let secs = ~~ duration % 60
  let time
  if(hrs>0) {
    time = hrs + ':' + (mins <10 ? '0' + mins : mins) + ':' + (secs <10 ? '0' + secs : secs)
  }
  time = (mins <10 ? '0' + mins : mins) + ':' + (secs <10 ? '0' + secs : secs)
  return time
}