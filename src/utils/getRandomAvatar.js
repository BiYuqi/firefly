export default function getRandomAvatar () {
  const MaxCount = 20
  const RanDomIndex = Math.random() * MaxCount
  return `/static/avatar/${RanDomIndex}.jpg`
}
