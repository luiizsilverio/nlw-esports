interface Props {
  bannerUrl: string;
  title: string;
  adsCount: number
}

export default function GameBanner(props: Props) {
  const { bannerUrl, title, adsCount } = props;

  return (
    <a href="#" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt="" />
      <div className={`
          w-full pt-16 pb-4 px-4 bg-game-gradient
          absolute bottom-0 left-0 right-0
      `}>
        <strong className='text-white font-bold block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>
          {`${adsCount} anúncio${adsCount > 1 ? 's' : ''}`}
        </span>
      </div>
    </a>
  )
}