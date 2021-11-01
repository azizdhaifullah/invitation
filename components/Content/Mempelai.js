import Image from "next/image";
import BungaKiri from '../../assets/leaves-left.png'
import BungaKanan from '../../assets/leaves-right.png'
import MaskTop from '../../assets/mask.png'
import MaskBottom from '../../assets/mask_bottom.png'
import Pengantin from "./Pengantin/Pengantin";
import BawahMempelai from "./BawahMempelai";

export default function Mempelai() {

    return (
        <>
            <div className={"bg-color-pallete-150 bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-5"}>
                    <div className={"flex justify-center items-center content-center"}>
                        <Image src={BungaKiri} width={150} height={150}/>
                        <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-mono"}>&nbsp;Groom
                            & Bride&nbsp;</h1>
                        <Image src={BungaKanan} width={150} height={150}/>
                    </div>
                    <br/>
                    <div className={"text-center px-10"}>
                        <p className={"leading-relaxed  text-white"}>Assalamu’alaikum Warahmatullahi Wabarakatuh
                            Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                            Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri
                            kami:
                        </p>
                    </div>
                    <Pengantin/>
                </div>
                <div className={"flex md:-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
