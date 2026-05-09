import { useEffect, useState } from "react";

export default function MamaAI() {
  const respuestas = [
    "Claro que sí mamá ❤️",
    "Eres mi lugar seguro.",
    "Gracias por nunca rendirte conmigo.",
    "Todo lo bueno en mí empezó contigo.",
    "Eres el corazón de esta familia ❤️",
    "Si volviera a nacer, te escogería otra vez.",
    "Nunca habrá alguien como tú.",
    "Tu amor me salvó muchas veces.",
  ];

  const [loading, setLoading] = useState(true);
  const [terminalText, setTerminalText] = useState([]);
  const [respuesta, setRespuesta] = useState("Siempre ❤️");
  const [visible, setVisible] = useState(true);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [mensajeEspecial, setMensajeEspecial] = useState(false);

  const lineas = [
    "$ initializing_mom_ai.exe",
    "loading memories...",
    "loading hugs...",
    "loading sacrifices...",
    "loading unconditional love...",
    "System ready ❤️",
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTerminalText((prev) => [...prev, lineas[index]]);
      index++;

      if (index >= lineas.length) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = document.getElementById("music");

    if (audio) {
      audio.volume = 0.25;
    }
  }, []);

  const responder = () => {
    setVisible(false);

    setTimeout(() => {
      const random =
        respuestas[Math.floor(Math.random() * respuestas.length)];

      setRespuesta(random);
      setVisible(true);
    }, 300);
  };

  const reproducirMusica = () => {
    const audio = document.getElementById("music");

    audio.play();
  };

  const activarSorpresa = () => {
    setMensajeEspecial(true);

    const audio = document.getElementById("music");
    audio.play();
  };

  if (loading) {
    return (
      <div
        style={{
          background: "#000",
          color: "#00ff99",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "monospace",
          fontSize: "24px",
          padding: "120px 30px 60px",
          boxSizing: "border-box",
        }}
      >
        <div>
          {terminalText.map((linea, i) => (
            <p
              key={i}
              style={{
                margin: "10px 0",
                animation: "fadeIn 0.5s ease",
              }}
            >
              {linea}
            </p>
          ))}
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #070012 0%, #17002e 40%, #000000 100%)",
        overflowX: "hidden",
        position: "relative",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        padding: "120px 30px 60px",
        boxSizing: "border-box",
      }}
    >
      {/* Música */}
      <audio
        id="music"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      {/* Glow fondo */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "#ff4da644",
          borderRadius: "50%",
          filter: "blur(140px)",
          top: "-200px",
          left: "-200px",
          animation:
            "pulse 8s ease-in-out infinite alternate",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#7b61ff44",
          borderRadius: "50%",
          filter: "blur(140px)",
          bottom: "-150px",
          right: "-150px",
        }}
      />

      {/* Estrellas */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            background: "white",
            borderRadius: "50%",
            opacity: Math.random(),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${
              2 + Math.random() * 5
            }s infinite`,
          }}
        />
      ))}

      {/* Corazones */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            color: "rgba(255,255,255,0.12)",
            fontSize: `${10 + Math.random() * 25}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${
              6 + Math.random() * 10
            }s infinite linear`,
          }}
        >
          ❤️
        </div>
      ))}

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          animation: "fadeMain 1.5s ease",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(60px, 10vw, 110px)",
              marginBottom: "10px",
              fontWeight: "900",
              background:
                "linear-gradient(to right, #ff4da6, #d88cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow:
                "0 0 35px rgba(255,77,166,0.35)",
              letterSpacing: "2px",
              lineHeight: "1.1",
              animation: "fadeMain 1.5s ease",
            }}
          >
            Mamá.AI
          </h1>

          <p
            style={{
              fontSize: "clamp(20px, 4vw, 30px)",
              color: "#e5d9ff",
              lineHeight: "1.5",
              maxWidth: "900px",
              margin: "0 auto",
              animation: "fadeMain 2s ease",
            }}
          >
            La inteligencia artificial más poderosa:
            <br />
            el amor de una mamá ❤️
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "40px",
            padding: "45px",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 60px rgba(255,0,128,0.1)",
          }}
        >
          {/* TERMINAL */}
          <div
            style={{
              background: "#020202",
              borderRadius: "30px",
              padding: "35px",
              fontFamily: "monospace",
              marginBottom: "40px",
              border: "1px solid #222",
              textAlign: "center",
              boxShadow: "0 0 25px rgba(0,0,0,0.5)",
            }}
          >
            <p style={{ color: "#00ff99" }}>
              $ initializing_mom_ai.exe
            </p>

            <p>loading memories...</p>
            <p>loading hugs...</p>
            <p>loading sacrifices...</p>
            <p>loading unconditional love...</p>

            <br />

            <p style={{ color: "#ff66cc" }}>
              System ready ❤️
            </p>

            <p style={{ color: "#ffb3d9" }}>
              Best mom detected successfully.
            </p>
          </div>

          {/* FOTOS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "45px",
            }}
          >
            {[
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  overflow: "hidden",
                  borderRadius: "28px",
                  boxShadow:
                    "0 15px 35px rgba(0,0,0,0.35)",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    transition: "0.5s",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>

          {/* DATOS IA */}
          <div
            style={{
              marginBottom: "40px",
              background: "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "25px",
              border:
                "1px solid rgba(255,255,255,0.06)",
              lineHeight: "2",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>
              🤖 Datos de Mamá.AI
            </h2>

            <p>Modelo: MOM-GPT v1.0</p>
            <p>Fuente de energía: Amor infinito ❤️</p>
            <p>Capacidad de abrazos: Incalculable</p>
            <p>Errores detectados: 0</p>
          </div>

          {/* BOTONES */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={responder}
              style={{
                background:
                  "linear-gradient(to right, #ff4da6, #ff70c5)",
                border: "none",
                padding: "18px 34px",
                borderRadius: "18px",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow:
                  "0 10px 25px rgba(255,77,166,0.3)",
              }}
            >
              ❤️ ¿Me quieres?
            </button>

            <button
              onClick={reproducirMusica}
              style={{
                background:
                  "linear-gradient(to right, #7b61ff, #9e8cff)",
                border: "none",
                padding: "18px 34px",
                borderRadius: "18px",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              🎵 Música
            </button>

            <button
              onClick={activarSorpresa}
              style={{
                background:
                  "linear-gradient(to right, #ff9966, #ff5e62)",
                border: "none",
                padding: "18px 34px",
                borderRadius: "18px",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow:
                  "0 10px 25px rgba(255,120,80,0.3)",
              }}
            >
              🎁 Presiona aquí mamá
            </button>
          </div>

          {/* RESPUESTA */}
          <div
            style={{
              marginTop: "45px",
              textAlign: "center",
              fontSize: "38px",
              color: "#ffb3d9",
              minHeight: "80px",
              opacity: visible ? 1 : 0,
              transition: "0.4s",
              fontWeight: "700",
              textShadow: "0 0 20px #ff66cc",
            }}
          >
            {respuesta}
          </div>

          {/* MENSAJE ESPECIAL */}
          {mensajeEspecial && (
            <div
              style={{
                marginTop: "40px",
                padding: "35px",
                borderRadius: "30px",
                textAlign: "center",
                background:
                  "linear-gradient(135deg, rgba(255,77,166,0.15), rgba(123,97,255,0.15))",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                animation: "fadeMain 1s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "45px",
                  marginBottom: "20px",
                  color: "#ffd6ea",
                }}
              >
                Gracias por darme la vida ❤️
              </h2>

              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "2",
                  color: "#f2e9ff",
                }}
              >
                Mamá...
                <br />
                gracias por nunca dejarme solo.
                <br />
                Gracias por cada abrazo,
                cada desvelo y cada sacrificio.
                <br />
                <br />
                Todo lo bueno que hay en mí
                empezó contigo.
                <br />
                Y aunque a veces no encuentre
                las palabras correctas...
                <br />
                quiero que nunca olvides
                cuánto te amo ❤️
              </p>
            </div>
          )}

          {/* CARTA */}
          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
            }}
          >
            <button
              onClick={() =>
                setMostrarCarta(!mostrarCarta)
              }
              style={{
                background: "transparent",
                border: "1px solid #ff80bf",
                color: "#ffb3d9",
                padding: "15px 28px",
                borderRadius: "18px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              💌 Abrir carta secreta
            </button>

            {mostrarCarta && (
              <div
                style={{
                  marginTop: "25px",
                  background: "rgba(255,255,255,0.04)",
                  padding: "35px",
                  borderRadius: "30px",
                  lineHeight: "2",
                  color: "#eee",
                  animation: "fadeMain 1s ease",
                }}
              >
                <h2
                  style={{
                    marginBottom: "20px",
                    color: "#ffd6ea",
                  }}
                >
                  Para la mejor mamá ❤️
                </h2>

                <p style={{ fontSize: "20px" }}>
                  Gracias por estar conmigo incluso
                  en mis peores momentos.
                  <br />
                  <br />
                  Gracias por enseñarme a nunca
                  rendirme.
                  <br />
                  <br />
                  Todo lo que soy hoy empezó contigo.
                  <br />
                  <br />
                  Y aunque no siempre lo diga mucho...
                  <br />
                  te amo muchísimo mamá ❤️
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#888",
            fontSize: "15px",
          }}
        >
          Developed with infinite love by your son 💻❤️
        </p>
      </div>

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          100% {
            transform: translateY(-120vh);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0.2;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1) translate(0px, 0px);
          }

          100% {
            transform: scale(1.2)
              translate(30px, 20px);
          }
        }

        @keyframes fadeMain {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}