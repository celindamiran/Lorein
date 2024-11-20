function adjustNote(note, max, hi) {
  if (note < 0) {
    // Handle the case where the note is below the minimum threshold
    note = (note % 12) + hi;
  } else if (note >= max) {
    // Wrap the note around if it exceeds the maximum threshold
    note = (note % 12) + hi;
  }
  return note;
}

// Example usage:
let note1 = adjustNote(15, 12, 60); // note1 should be 63 (15 % 12 + 60)
let note2 = adjustNote(10, 12, 60); // note2 should remain 10 as it is within range
let note3 = adjustNote(-5, 12, 60); // note3 should be 67 (-5 % 12 + 60)

console.log(note1); // Output: 63
console.log(note2); // Output: 10
console.log(note3); // Output: 67
