const song = (num = 99) => {
  if ( num <= 0 ) {
    return 
  }
  console.log(`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${(num - 1)} bottles of beer on the wall.`)
  return song(num - 1)
}

song()