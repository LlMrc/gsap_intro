import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Testimonial from "../testimonial/testimonial";
import SplitType from "split-type";

function Expertize() {
  const contentWidth = useRef(null);

  useLayoutEffect(() => {
    const text = new SplitType("#title");

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: contentWidth.current,
          start: "top bottom-=200",

          toggleActions: "restart pause none none",
        },
      });
      t1.to(".t1", {
        y: 0,
        duration: 0.6,
        opacity: 1,
        delay: 0.7,
        transition: "all 1s power1.inOut ",
      }).to(text.chars, {
        y: 0,
        stagger: 0.05,
        duration: 0.1,
        ease: "power3.inOut",
      });
    }, contentWidth);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.wrapper} data-scroll-section>
        <div ref={contentWidth}>
          <h2 className="t1"> My </h2>
          <h2 id="title"> Expertises</h2>
        </div>

        <Testimonial />
      </div>
    </>
  );
}

export default Expertize;
