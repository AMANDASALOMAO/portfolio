import { useEffect, useRef } from "react";

type UseEyesOptions = {
  containerRef: React.RefObject<HTMLElement>;
  radiusX?: number;
  radiusY?: number;
  ease?: number;
};

type EyeData = {
  eye: HTMLElement;
  pupil: HTMLElement;
  centerX: number;
  centerY: number;
  currentX: number;
  currentY: number;
};

export const useEyes = ({
  containerRef,
  radiusX = 20,
  radiusY = 14,
  ease = 0.12,
}: UseEyesOptions) => {
  const eyes = useRef<EyeData[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const eyeElements = containerRef.current?.querySelectorAll(".eye");

    if (!eyeElements) return;

    // Inicializar olhos
    eyes.current = Array.from(eyeElements).map((eyeEl) => {
      const pupil = eyeEl.querySelector(".pupil") as HTMLElement;
      const rect = eyeEl.getBoundingClientRect();

      return {
        eye: eyeEl as HTMLElement,
        pupil,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
        currentX: 0,
        currentY: 0,
      };
    });

    const updateCenters = () => {
      eyes.current.forEach((eye) => {
        const rect = eye.eye.getBoundingClientRect();
        eye.centerX = rect.left + rect.width / 2;
        eye.centerY = rect.top + rect.height / 2;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateCenters);

    let raf: number;

    const animate = () => {
      eyes.current.forEach((eye) => {

      const dx = mouse.current.x - eye.centerX;
      const dy = mouse.current.y - eye.centerY;
          
      // distância real
      const distance = Math.sqrt(dx * dx + dy * dy);
          
      // normalizar direção
      const normX = dx / distance || 0;
      const normY = dy / distance || 0;
          
      // clamp suave (ESSENCIAL)
      const maxDistance = 12;
          
      // curva suave (quanto mais longe, mais anda)
      const strength = Math.min(distance / 120, 1);
          
      const targetX = normX * maxDistance * strength;
      const targetY = normY * maxDistance * strength * 0.8;

        eye.currentX += (targetX - eye.currentX) * ease;
        eye.currentY += (targetY - eye.currentY) * ease;

        eye.pupil.style.transform = `
          translate(-50%, -50%)
          translate(${eye.currentX}px, ${eye.currentY}px)
        `;
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCenters);
      cancelAnimationFrame(raf);
    };
  }, [containerRef, radiusX, radiusY, ease]);
};