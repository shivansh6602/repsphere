// Detail.jsx
import { motion } from "framer-motion";
import {
  Dumbbell,
  Accessibility,
  PersonStanding,
} from "lucide-react";

const Detail = ({ exerciseDetail }) => {
  const {
    bodyPart,
    gifUrl,
    name,
    target,
    equipment,
  } = exerciseDetail;

  const detailCards = [
    {
      icon: (
        <Accessibility
          size={28}
          color="#FF2625"
        />
      ),
      label: bodyPart,
    },
    {
      icon: (
        <Dumbbell size={28} color="#FF2625" />
      ),
      label: target,
    },
    {
      icon: (
        <PersonStanding
          size={28}
          color="#FF2625"
        />
      ),
      label: equipment,
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "64px",
        padding: "0px 40px",
      }}
    >
    
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={
            gifUrl ||
            "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg"
          }
          alt={name}
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          style={{
            width: "460px",
            height: "460px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.15)",
          }}
        />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut",
        }}
        style={{
          maxWidth: "550px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginBottom: "171px",
        }}
      >
        
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            style={{
              fontSize: "44px",
              fontWeight: 700,
              textTransform: "capitalize",
              color: "#222",
              margin: 0,
              fontFamily: "system-ui",
            }}
          >
            {name}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            style={{
              width: "80px",
              height: "4px",
              background: "#FF2625",
              borderRadius: "10px",
              marginTop: "12px",
              transformOrigin: "left",
            }}
          />
        </div>

       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
          style={{
            fontSize: "16px",
            lineHeight: "28px",
            color: "#555",
            margin: 0,
                fontFamily: "sans-serif",
          }}
        >
          Exercises keep you strong and healthy.
          The{" "}
          <span
            style={{
              color: "#FF2625",
              fontWeight: 600,
            }}
          >
            {name}
          </span>{" "}
          is one of the best workouts to target
          your{" "}
          <span style={{ fontWeight: 600 }}>
            {target}
          </span>
          . It helps improve strength, endurance
          and overall body performance.
        </motion.p>

     
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            fontFamily: "system-ui",
          }}
        >
          {detailCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.15,
              }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 18px 40px rgba(0,0,0,0.12)",
                  
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                borderRadius: "14px",
                background: "#fff",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.06)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  background: "#FFECEC",
                  padding: "12px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Detail;
