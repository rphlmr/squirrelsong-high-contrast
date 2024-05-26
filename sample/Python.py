# Once upon a time...

class Squirrel:
  def __init__(self, props):
    self.location = props['location']
    self.birthDate = props['birthDate']
    self.deathDate = props['deathDate']
    self.weaknesses = props['weaknesses']

  def get_age(self):
    return self.calc_age()

  def calc_age(self):
    return self.deathDate - self.birthDate

# ...there was a squirrel named Squeaky

Squeaky = Squirrel({
  'location': 'Hundred Acre Wood',
  'birthDate': 1924,
  'deathDate': 1936,
  'weaknesses': ['Hazelnuts', 'Donuts']
})
