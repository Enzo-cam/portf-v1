import Image from "next/image"

const Header = () => {
  return (
    <div>
        <Image
            src="/ryu.png"
            alt="LogoEnzocam"
            width={40}
            height={40}
        />

        <p>
            |
        </p>
    </div>
  )
}

export default Header