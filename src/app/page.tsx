import Image from 'next/image'
import FiltersContainer from './components/FilterContainer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FiltersContainer />
    </main>
  )
}
