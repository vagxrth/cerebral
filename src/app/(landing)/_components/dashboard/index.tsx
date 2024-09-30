import Image from "next/image"

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="relative py-20">
      <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
      <div className="w-full aspect-video relative">
        <Image
          priority
          src="/dashboard.png"
          className="opacity-[0.95]"
          alt="snippet"
          sizes="100vw"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Dashboard