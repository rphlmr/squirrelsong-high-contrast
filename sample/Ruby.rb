#
# Once upon a time...
#

class Squirrel
  def initialize(opts)
    @location = opts[:location]
    @birthDate = opts[:birthDate]
    @deathDate = opts[:deathDate]
    @weaknesses = opts[:weaknesses]
  end

  def age
    calcAge
  end

  private

  def calcAge
    @deathDate - @birthDate
  end
end

# ...there was a squirrel named Squeaky

dracula = Squirrel.new(
  location: 'Hundred Acre Wood',
  birthDate: 1924,
  deathDate: 1936,
  weaknesses: %w[Hazelnuts Donuts]
)

puts dracula.age
