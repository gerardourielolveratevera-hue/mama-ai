import mama1 from "./assets/mama1.jpeg";
import mama2 from "./assets/mama2.jpeg";
import familia from "./assets/familia.jpeg";

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
    "Eres mi héroe sin capa 🦸‍♀️",
    "Contigo aprendí qué es amar de verdad.",
  ];

  const [loading, setLoading] = useState(true);
  const [terminalText, setTerminalText] = useState([]);
  const [respuesta, setRespuesta] = useState("Siempre ❤️");
  const [visible, setVisible] = useState(true);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [mensajeEspecial, setMensajeEspecial] = useState(false);
  const [mensajeTipeado, setMensajeTipeado] = useState("");
  const [contadorAbrazos, setContadorAbrazos] = useState(0);
  const [mostrarConfeti, setMostrarConfeti] = useState(false);
  const [fotos, setFotos] = useState([
    mama1,
    mama2,
    familia,
  ]);
  const [mostrarSubirFoto, setMostrarSubirFoto] = useState(false);
  const [diasDesdeNacimiento, setDiasDesdeNacimiento] = useState(0);
  const [mensajeSecretoRevelado, setMensajeSecretoRevelado] = useState(0);
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const lineas = [
    "$ initializing_mom_ai.exe",
    "loading memories...",
    "loading hugs...",
    "loading sacrifices...",
    "loading unconditional love...",
    "System ready ❤️",
  ];

  // Mensaje especial completo que se tipeará
  const mensajeCompleto = `Mamá... gracias por nunca dejarme solo. Gracias por cada abrazo, cada desvelo y cada sacrificio. Todo lo bueno que hay en mí empezó contigo. Y aunque a veces no encuentre las palabras correctas... quiero que nunca olvides cuánto te amo ❤️`;

  // Calcular días desde nacimiento (ejemplo: 15 de mayo de 1970)
  useEffect(() => {
    const fechaNacimiento = new Date(1970, 4, 15); // Cambia por la fecha real de tu mamá
    const hoy = new Date();
    const diferencia = hoy - fechaNacimiento;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    setDiasDesdeNacimiento(dias);
  }, []);

  // Efecto de tipeo para el mensaje especial
  useEffect(() => {
    if (mensajeEspecial && mensajeTipeado.length < mensajeCompleto.length) {
      const timeout = setTimeout(() => {
        setMensajeTipeado(mensajeCompleto.slice(0, mensajeTipeado.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [mensajeEspecial, mensajeTipeado]);

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
      const random = respuestas[Math.floor(Math.random() * respuestas.length)];
      setRespuesta(random);
      setVisible(true);
    }, 300);
  };

  const darAbrazo = () => {
    setContadorAbrazos(contadorAbrazos + 1);
    const audio = document.getElementById("music");
    if (audio.paused) {
      audio.play();
    }
    
    // Efecto de vibración si está en móvil
    if (window.navigator.vibrate) {
      window.navigator.vibrate(200);
    }
  };

  const reproducirMusica = () => {
    const audio = document.getElementById("music");
    audio.play();
  };

  const activarSorpresa = () => {
    setMensajeEspecial(true);
    setMostrarConfeti(true);
    const audio = document.getElementById("music");
    audio.play();
    
    // Ocultar confeti después de 5 segundos
    setTimeout(() => {
      setMostrarConfeti(false);
    }, 5000);
  };

  const manejarSubidaFotos = (e) => {
    const archivos = Array.from(e.target.files);
    const nuevasFotos = archivos.map(archivo => URL.createObjectURL(archivo));
    setFotos([...fotos, ...nuevasFotos]);
  };

  const revelarMensajeSecreto = () => {
    if (mensajeSecretoRevelado < 3) {
      setMensajeSecretoRevelado(mensajeSecretoRevelado + 1);
    }
  };

  const razonesPorLasQueLaAmo = [
    "Por tu paciencia infinita",
    "Por tus abrazos que curan todo",
    "Por nunca rendirte conmigo",
    "Por enseñarme a ser fuerte",
    "Por tus consejos sabios",
    "Por tu sonrisa que ilumina",
    "Por cada desvelo cuidándome",
    "Por amarme sin condiciones",
  ];

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
          fontSize: "clamp(15px, 4vw, 24px)",
          padding: "40px 20px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          {terminalText.map((linea, i) => (
            <p
              key={i}
              style={{
                margin: "12px 0",
                animation: "fadeIn 0.5s ease",
                wordBreak: "break-word",
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
        background: "linear-gradient(135deg, #070012 0%, #17002e 40%, #000000 100%)",
        overflowX: "hidden",
        position: "relative",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        padding: "70px 15px 50px",
        boxSizing: "border-box",
      }}
    >
      {/* Confeti */}
      {mostrarConfeti && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: `${5 + Math.random() * 10}px`,
                height: `${5 + Math.random() * 10}px`,
                background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                left: `${Math.random() * 100}%`,
                top: "-10px",
                animation: `confeti ${1 + Math.random() * 2}s linear forwards`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Música */}
      <audio id="music" src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_bb6314e3f2.mp3" loop />

      {/* Glow fondo */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#ff4da644",
          borderRadius: "50%",
          filter: "blur(140px)",
          top: "-200px",
          left: "-200px",
          animation: "pulse 8s ease-in-out infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
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
            animation: `twinkle ${2 + Math.random() * 5}s infinite`,
          }}
        />
      ))}

      {/* Corazones flotantes */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            color: `rgba(255,${100 + Math.random() * 155},${100 + Math.random() * 155},${0.1 + Math.random() * 0.2})`,
            fontSize: `${10 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 10}s infinite linear`,
            pointerEvents: "none",
          }}
        >
          {Math.random() > 0.5 ? "❤️" : "💖"}
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
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h1
            style={{
              fontSize: "clamp(48px, 13vw, 110px)",
              marginBottom: "10px",
              fontWeight: "900",
              background: "linear-gradient(to right, #ff4da6, #d88cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 35px rgba(255,77,166,0.35)",
              letterSpacing: "2px",
              lineHeight: "1.1",
            }}
          >
            Mamá.AI
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 30px)",
              color: "#e5d9ff",
              lineHeight: "1.6",
              maxWidth: "850px",
              margin: "0 auto",
              padding: "0 10px",
            }}
          >
            La inteligencia artificial más poderosa:
            <br />
            el amor de una mamá ❤️
          </p>
        </div>

        {/* CARD PRINCIPAL */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "30px",
            padding: "clamp(18px, 5vw, 45px)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 60px rgba(255,0,128,0.1)",
          }}
        >
          {/* TERMINAL */}
          <div
            style={{
              background: "#020202",
              borderRadius: "25px",
              padding: "25px 15px",
              fontFamily: "monospace",
              marginBottom: "40px",
              border: "1px solid #222",
              textAlign: "center",
              boxShadow: "0 0 25px rgba(0,0,0,0.5)",
              overflowWrap: "break-word",
            }}
          >
            <p style={{ color: "#00ff99", fontSize: "clamp(13px, 3vw, 24px)" }}>
              $ initializing_mom_ai.exe
            </p>
            <p style={{ fontSize: "clamp(14px, 4vw, 22px)" }}>loading memories...</p>
            <p style={{ fontSize: "clamp(14px, 4vw, 22px)" }}>loading hugs...</p>
            <p style={{ fontSize: "clamp(14px, 4vw, 22px)" }}>loading sacrifices...</p>
            <p style={{ fontSize: "clamp(14px, 4vw, 22px)" }}>loading unconditional love...</p>
            <br />
            <p style={{ color: "#ff66cc", fontSize: "clamp(16px, 4vw, 24px)" }}>System ready ❤️</p>
            <p style={{ color: "#ffb3d9", fontSize: "clamp(14px, 4vw, 22px)" }}>Best mom detected successfully.</p>
          </div>

          {/* SECCIÓN DE FOTOS PERSONALIZABLES */}
          <div style={{ marginBottom: "45px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
              <h2 style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>📸 Nuestros recuerdos</h2>
              <button
                onClick={() => setMostrarSubirFoto(!mostrarSubirFoto)}
                style={{
                  background: "linear-gradient(to right, #ff4da6, #ff70c5)",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "18px",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {mostrarSubirFoto ? "Cerrar" : "➕ Subir fotos"}
              </button>
            </div>
            
            {mostrarSubirFoto && (
              <div style={{ marginBottom: "20px", padding: "20px", background: "rgba(255,255,255,0.08)", borderRadius: "20px" }}>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={manejarSubidaFotos}
                  style={{ color: "white", marginBottom: "10px" }}
                />
                <p style={{ fontSize: "12px", color: "#aaa" }}>Puedes subir tus propias fotos con mamá</p>
              </div>
            )}
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {fotos.map((img, i) => (
                <div
                  key={i}
                  style={{
                    overflow: "hidden",
                    borderRadius: "28px",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "clamp(220px, 40vw, 300px)",
                      objectFit: "cover",
                      transition: "0.5s",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DATOS IA Y CONTADOR DE DÍAS */}
          <div
            style={{
              marginBottom: "40px",
              background: "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "25px",
              border: "1px solid rgba(255,255,255,0.06)",
              lineHeight: "2",
            }}
          >
            <h2 style={{ marginBottom: "15px", fontSize: "clamp(22px, 5vw, 35px)" }}>🤖 Datos de Mamá.AI</h2>
            <p>Modelo: MOM-GPT v1.0</p>
            <p>Fuente de energía: Amor infinito ❤️</p>
            <p>Capacidad de abrazos: Incalculable</p>
            <p>Errores detectados: 0</p>
            <p>⭐ Días que me has acompañado: {diasDesdeNacimiento} días de puro amor</p>
            <p>🤗 Abrazos virtuales dados: {contadorAbrazos}</p>
          </div>

          {/* 30 RAZONES */}
          <div
            style={{
              marginBottom: "40px",
              background: "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "25px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h2 style={{ marginBottom: "15px", fontSize: "clamp(22px, 5vw, 35px)" }}>💖 30 razones por las que te amo</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "10px" }}>
              {[...Array(30)].map((_, i) => (
                <p key={i} style={{ fontSize: "14px", margin: "5px 0" }}>
                  {i + 1}. {razonesPorLasQueLaAmo[i % razonesPorLasQueLaAmo.length]}
                </p>
              ))}
            </div>
          </div>

          {/* BOTONES */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={responder}
              style={{
                background: "linear-gradient(to right, #ff4da6, #ff70c5)",
                border: "none",
                padding: "16px 24px",
                borderRadius: "18px",
                color: "white",
                fontSize: "clamp(14px, 3vw, 18px)",
                fontWeight: "700",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 10px 25px rgba(255,77,166,0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(255,77,166,0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255,77,166,0.3)";
              }}
            >
              ❤️ ¿Me quieres?
            </button>

            <button
              onClick={darAbrazo}
              style={{
                background: "linear-gradient(to right, #ff9966, #ff5e62)",
                border: "none",
                padding: "16px 24px",
                borderRadius: "18px",
                color: "white",
                fontSize: "clamp(14px, 3vw, 18px)",
                fontWeight: "700",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🤗 Dar abrazo virtual
            </button>

            <button
              onClick={reproducirMusica}
              style={{
                background: "linear-gradient(to right, #7b61ff, #9e8cff)",
                border: "none",
                padding: "16px 24px",
                borderRadius: "18px",
                color: "white",
                fontSize: "clamp(14px, 3vw, 18px)",
                fontWeight: "700",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🎵 Música
            </button>

            <button
              onClick={activarSorpresa}
              style={{
                background: "linear-gradient(to right, #00b4db, #0083b0)",
                border: "none",
                padding: "16px 24px",
                borderRadius: "18px",
                color: "white",
                fontSize: "clamp(14px, 3vw, 18px)",
                fontWeight: "700",
                cursor: "pointer",
                transition: "transform 0.2s",
                animation: "pulseGlow 2s infinite",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🎁 Presiona aquí mamá
            </button>
          </div>

          {/* RESPUESTA */}
          <div
            style={{
              marginTop: "45px",
              textAlign: "center",
              fontSize: "clamp(26px, 7vw, 42px)",
              color: "#ffb3d9",
              minHeight: "80px",
              opacity: visible ? 1 : 0,
              transition: "0.4s",
              fontWeight: "700",
              textShadow: "0 0 20px #ff66cc",
              padding: "0 10px",
            }}
          >
            {respuesta}
          </div>

          {/* MENSAJE ESPECIAL CON EFECTO MÁQUINA DE ESCRIBIR */}
          {mensajeEspecial && (
            <div
              style={{
                marginTop: "40px",
                padding: "35px",
                borderRadius: "30px",
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(255,77,166,0.2), rgba(123,97,255,0.2))",
                border: "2px solid rgba(255,255,255,0.15)",
                animation: "fadeMain 1s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px, 7vw, 50px)",
                  marginBottom: "20px",
                  color: "#ffd6ea",
                }}
              >
                Gracias por darme la vida ❤️
              </h2>
              <p
                style={{
                  fontSize: "clamp(16px, 4vw, 24px)",
                  lineHeight: "2",
                  color: "#f2e9ff",
                  whiteSpace: "pre-wrap",
                }}
              >
                {mensajeTipeado}
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "1.2em",
                    backgroundColor: "#ff4da6",
                    animation: "parpadeo 1s infinite",
                    marginLeft: "2px",
                  }}
                />
              </p>
            </div>
          )}

          {/* MENSAJE SECRETO REVELADO GRADUALMENTE */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              onClick={revelarMensajeSecreto}
              style={{
                background: "transparent",
                border: "1px solid #ff80bf",
                color: "#ffb3d9",
                padding: "12px 24px",
                borderRadius: "18px",
                fontSize: "clamp(12px, 3vw, 16px)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,128,191,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              🔐 Toca para revelar mensaje secreto
            </button>
            
            {mensajeSecretoRevelado > 0 && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  background: "rgba(255,215,0,0.1)",
                  borderRadius: "20px",
                  animation: "fadeMain 0.5s ease",
                }}
              >
                <p style={{ fontSize: "clamp(14px, 4vw, 20px)" }}>
                  {mensajeSecretoRevelado === 1 && "✨ Eres la mejor mamá del universo ✨"}
                  {mensajeSecretoRevelado === 2 && "💫 Te llevo en mi corazón cada segundo 💫"}
                  {mensajeSecretoRevelado === 3 && "🌟 Prometo cuidarte siempre como tú me cuidaste a mí 🌟"}
                </p>
              </div>
            )}
          </div>

          {/* CARTA SECRETA */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              onClick={() => setMostrarCarta(!mostrarCarta)}
              style={{
                background: "transparent",
                border: "1px solid #ff80bf",
                color: "#ffb3d9",
                padding: "15px 28px",
                borderRadius: "18px",
                fontSize: "clamp(14px, 3vw, 18px)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,128,191,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              💌 Abrir carta secreta
            </button>

            {mostrarCarta && (
              <div
                style={{
                  marginTop: "25px",
                  background: "rgba(255,255,255,0.04)",
                  padding: "30px",
                  borderRadius: "30px",
                  lineHeight: "2",
                  color: "#eee",
                  animation: "fadeMain 1s ease",
                }}
              >
                <h2 style={{ marginBottom: "20px", color: "#ffd6ea", fontSize: "clamp(24px, 6vw, 42px)" }}>
                  Para la mejor mamá ❤️
                </h2>
                <p style={{ fontSize: "clamp(16px, 4vw, 22px)" }}>
                  Gracias por estar conmigo incluso en mis peores momentos.
                  <br />
                  <br />
                  Gracias por enseñarme a nunca rendirme.
                  <br />
                  <br />
                  Todo lo que soy hoy empezó contigo.
                  <br />
                  <br />
                  Y aunque no siempre lo diga mucho...
                  <br />
                  <br />
                  <strong style={{ fontSize: "1.2em", color: "#ffb3d9" }}>te amo muchísimo mamá ❤️</strong>
                </p>
              </div>
            )}
          </div>

          {/* BADGE MEJOR MAMÁ */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
              padding: "20px",
              background: "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1))",
              borderRadius: "20px",
              border: "1px solid gold",
            }}
          >
            <p style={{ fontSize: "clamp(20px, 5vw, 32px)", fontWeight: "bold", color: "gold" }}>
              🏆 MEJOR MAMÁ DEL MUNDO 🏆
            </p>
            <p style={{ fontSize: "14px", color: "#ccc" }}>Certificado de amor infinito</p>
          </div>
        </div>

        {/* FOOTER */}
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#888",
            fontSize: "14px",
            padding: "0 10px",
          }}
        >
          Developed with infinite love by your son 💻❤️
        </p>
      </div>

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @keyframes pulse {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          100% {
            transform: scale(1.2) translate(30px, 20px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0,180,219,0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(0,180,219,0.8);
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

        @keyframes parpadeo {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes confeti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}