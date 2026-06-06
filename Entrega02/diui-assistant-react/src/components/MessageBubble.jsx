import botImg from "../assets/wall-e.jpeg";
import userImg from "../assets/eva.jpeg";

const AVATARS = {
    wallui: { src: botImg, alt: "Wall-UI" },
    user: { src: userImg, alt: "User" },
};

const Avatar = ({ tipo }) => {
    const { src, alt } = AVATARS[tipo];
    return (
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#6b7480]">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

export default function MessageBubble({ tipo, texto, hora }) {
    const isWallUI = tipo === "wallui";

    return (
        <div className={[
            "flex items-end gap-2 sm:gap-3 w-full px-3 sm:px-6",
            isWallUI ? "justify-start" : "justify-end",
        ].join(" ")}>

            {isWallUI && <Avatar tipo="wallui" />}

            <div className="relative max-w-[75%] sm:max-w-[60%]">

                <div className={[
                    "absolute bottom-0 w-3 h-3 rounded-full translate-y-[calc(100%+4px)]",
                    isWallUI ? "left-0 bg-[#927455]" : "right-0 bg-[#E1DDD5]",
                ].join(" ")} />

                <div className={[
                    "rounded-2xl px-4 py-3 sm:px-5 sm:py-4",
                    isWallUI
                        ? "bg-[#927455] text-[#000000] rounded-bl-sm"
                        : "bg-[#E1DDD5] text-[#000000] rounded-br-sm",
                ].join(" ")}>
                    <p className="text-sm sm:text-base leading-relaxed m-0">{texto}</p>

                    <div className={[
                        "flex items-center justify-between gap-4 mt-2 text-xs opacity-70",
                        isWallUI ? "text-[#000000]" : "text-[#000000]",
                    ].join(" ")}>
                        {isWallUI ? (
                            <>
                                <span className="font-semibold">Wall-UI</span>
                                <span>{hora}</span>
                            </>
                        ) : (
                            <>
                                <span>{hora}</span>
                                <span className="font-semibold">User</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {!isWallUI && <Avatar tipo="user" />}
        </div>
    );
}