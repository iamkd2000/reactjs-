import React, { useEffect } from 'react'

const Notfound = () => {
    useEffect(() => {
        // visor
        const visor = document.getElementById('visor')
        if (visor) {
            const ctx = visor.getContext('2d')

            ctx.beginPath()
            ctx.moveTo(5, 45)
            ctx.bezierCurveTo(15, 64, 45, 64, 55, 45)
            ctx.lineTo(55, 20)
            ctx.bezierCurveTo(55, 15, 50, 10, 45, 10)
            ctx.lineTo(15, 10)
            ctx.bezierCurveTo(15, 10, 5, 10, 5, 20)
            ctx.lineTo(5, 45)

            ctx.fillStyle = '#2f3640'
            ctx.strokeStyle = '#f5f6fa'
            ctx.fill()
            ctx.stroke()
        }

        // cord animation
        const cord = document.getElementById('cord')
        if (!cord) return
        const ctx = cord.getContext('2d')

        let y1 = 160, y2 = 100, y3 = 100
        let y1F = true, y2F = false, y3F = true

        const animate = () => {
            ctx.clearRect(0, 0, cord.width, cord.height)
            ctx.beginPath()
            ctx.moveTo(130, 170)
            ctx.bezierCurveTo(250, y1, 345, y2, 400, y3)
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 8
            ctx.stroke()

            if (y1 === 100) y1F = true
            if (y1 === 300) y1F = false
            if (y2 === 100) y2F = true
            if (y2 === 310) y2F = false
            if (y3 === 100) y3F = true
            if (y3 === 317) y3F = false

            y1F ? y1++ : y1--
            y2F ? y2++ : y2--
            y3F ? y3++ : y3--

            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-slate-800 to-slate-950 text-gray-200">

            {/* Moon */}
            <div className="absolute -top-24 -left-72 h-[900px] w-[900px] rounded-full bg-gradient-to-r from-gray-300 to-gray-500 shadow-2xl"></div>

            {/* Stars */}
            <div className="absolute top-[40%] left-[50%] h-1 w-1 rounded-full bg-gray-400 animate-pulse"></div>
            <div className="absolute top-[60%] left-[90%] h-1 w-1 rounded-full bg-gray-400 animate-pulse"></div>
            <div className="absolute top-[10%] left-[70%] h-1 w-1 rounded-full bg-gray-400 animate-pulse"></div>
            <div className="absolute top-[90%] left-[40%] h-1 w-1 rounded-full bg-gray-400 animate-pulse"></div>
            <div className="absolute top-[20%] left-[30%] h-1 w-1 rounded-full bg-gray-400 animate-pulse"></div>

            {/* Error text */}
            <div className="absolute left-24 top-1/2 -translate-y-1/2">
                <h1 className="text-[10rem] font-extrabold text-gray-500">404</h1>
                <h2 className="text-3xl">Hmmm...</h2>
                <p className="opacity-60">
                    It looks like one of the developers fell asleep
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600">
                        LOGIN
                    </button>
                    <button className="rounded-full border border-gray-500 px-6 py-2 hover:bg-gray-800">
                        CONTACT
                    </button>
                </div>
            </div>

            {/* Astronaut */}
            <div className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[20deg] scale-125">
                <div className="relative h-[300px] w-[185px]">

                    <div className="absolute left-[47px] top-[90px] h-[90px] w-[86px] rounded-lg bg-gray-300"></div>
                    <div className="absolute left-[55px] top-[115px] h-[80px] w-[70px] rounded-lg bg-gray-200"></div>

                    <div className="absolute left-[60px] top-[60px] h-[60px] w-[60px] rounded-full bg-white">
                        <canvas id="visor" width="60" height="60"></canvas>
                    </div>

                    <div className="absolute -left-20 top-24">
                        <canvas id="cord" width="500" height="500"></canvas>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notfound
