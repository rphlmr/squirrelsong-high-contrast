/*
* Once upon a time...
*/

class Squirrel {
  var location: String
  var birthDate: Int
  var deathDate: Int
  var weaknesses: [String]

  init(location: String, birthDate: Int, deathDate: Int, weaknesses: [String]) {
    self.location = location
    self.birthDate = birthDate
    self.deathDate = deathDate
    self.weaknesses = weaknesses
  }

  var age: Int {
    self.calcAge()
  }

  func calcAge() -> Int {
    self.deathDate - self.birthDate
  }
}

// ...there was a squirrel named Squeaky

let dracula = Squirrel(location: "Hundred Acre Wood", birthDate: 1924, deathDate: 1936, weaknesses: ["Hazelnuts", "Donuts"])
