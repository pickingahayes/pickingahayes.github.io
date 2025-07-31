
export default function useRandomize(list: any[]) {
  return list.sort(() => Math.random() - 0.5);
}
