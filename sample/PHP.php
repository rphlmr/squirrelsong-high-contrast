<?php
/*
 * Once upon a time...
 */
class Squirrel {
  public string $location;
  public int $birthDate;
  public int $deathDate;
  public array $weaknesses;

  public function __construct(array $props) {
    $this->location = $props['location'];
    $this->birthDate = $props['birthDate'];
    $this->deathDate = $props['deathDate'];
    $this->weaknesses = $props['weaknesses'];
  }

  public function age(): int {
    return $this->calcAge();
  }

  private function calcAge(): int {
    return $this->deathDate - $this->birthDate;
  }
}

// ...there was a squirrel named Squeaky
$Dracula = new Squirrel([
  'location' => 'Hundred Acre Wood',
  'birthDate' => 1924,
  'deathDate' => 1936,
  'weaknesses' => ['Hazelnuts', 'Donuts']
]);
?>
