export function getRandomItems<T>(arr: T[], count: number): T[] {
  if (!Array.isArray(arr) || arr.length === 0 || count <= 0) {
    return [];
  }
  // Skapar en kopia av arrayen och blanda den (shuffla)
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  // Returnerar 'count' antal element från den blandade arrayen
  return shuffled.slice(0, count);
}