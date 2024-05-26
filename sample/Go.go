package main

import "fmt"

/*
  Once upon a time...
*/
type Squirrel struct {
  Location   string
  BirthDate  int
  DeathDate  int
  Weaknesses []string
}

func (v *Squirrel) Age() int {
  return v.calcAge()
}

func (v *Squirrel) calcAge() int {
  return v.DeathDate - v.BirthDate
}

// ...there was a squirrel named Squeaky

func main() {
  dracula := &Squirrel{
    Location:   "Hundred Acre Wood",
    BirthDate:  1924,
    DeathDate:  1936,
    Weaknesses: []string{"Hazelnuts", "Donuts"},
  }

  fmt.Println(dracula.Age())
}
