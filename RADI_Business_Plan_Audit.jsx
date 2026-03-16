import { useState } from "react";

const SECTIONS = [
  {
    id: "equipo",
    title: "01 — EQUIPO FUNDADOR",
    why: "ENISA invierte en equipos, no solo en proyectos. Sin histórico financiero, el equipo es el factor cualitativo más pesado.",
    status: "parcial",
    items: [
      {
        text: "CV detallado de cada socio con experiencia relevante cuantificada",
        detail: "No basta con 'diseñador industrial'. Necesitáis: años de experiencia, proyectos concretos, volumen gestionado, clientes atendidos. Si habéis diseñado algo que se ha fabricado y vendido, eso es oro.",
        have: false,
        critical: true,
      },
      {
        text: "Justificación de complementariedad del equipo",
        detail: "ENISA quiere ver que no sois dos perfiles idénticos. Uno diseña, otro gestiona/vende. Documentad quién hace qué y por qué esa combinación funciona.",
        have: false,
        critical: true,
      },
      {
        text: "Skin in the game documentado (capital propio invertido)",
        detail: "Cuánto pone cada socio, de dónde sale, y por qué esto demuestra compromiso real. El plan financiero menciona 10k cada uno — formalizadlo.",
        have: true,
        critical: true,
      },
      {
        text: "Advisory board o mentores identificados",
        detail: "Si no tenéis experiencia en gestión empresarial, ENISA penaliza. Solución: incorporad 1-2 advisors con experiencia en el sector mueble o en startups DTC. Vuestra red en BCN puede dar esto.",
        have: false,
        critical: false,
      },
      {
        text: "Dedicación a tiempo completo confirmada",
        detail: "¿Estáis los dos full-time en RADI? Si uno sigue trabajando por cuenta ajena, hay que explicar el timeline de transición. ENISA valora dedicación total.",
        have: false,
        critical: true,
      },
    ],
  },
  {
    id: "mercado",
    title: "02 — ANÁLISIS DE MERCADO",
    why: "El documento de marca identifica bien el hueco conceptual, pero falta traducirlo a números que un analista financiero pueda validar.",
    status: "parcial",
    items: [
      {
        text: "TAM / SAM / SOM con fuentes verificables",
        detail: "Tenéis esto en el documento (TAM ~200.000M€, SAM 700M-1.200M€, SOM 3,5M€ a 36 meses). Pero las fuentes son estimaciones propias. Necesitáis citar Statista, Euromonitor, IBISWorld o similares. Un analista ENISA googlea vuestras cifras.",
        have: true,
        critical: true,
      },
      {
        text: "Validación de demanda con datos primarios",
        detail: "El BP dice 'existe un público masivo'. ¿Cómo lo sabéis? Encuestas, lista de espera con emails reales, compromisos de compra de interioristas, pre-orders. Sin esto, es una hipótesis, no un hecho.",
        have: false,
        critical: true,
      },
      {
        text: "Análisis competitivo con precios reales y cuotas",
        detail: "El documento de marca compara bien a nivel conceptual (HAY, IKEA, Vitra). Falta: facturación real de competidores, cuotas de mercado, precios exactos por pieza comparable, y por qué RADI puede capturar un % concreto.",
        have: true,
        critical: false,
      },
      {
        text: "Tendencias de mercado con datos (no solo narrativa)",
        detail: "Crecimiento del ecommerce de muebles post-COVID, auge de DTC furniture brands en EU, tamaño del mercado flat-pack premium. Con cifras y fuentes.",
        have: false,
        critical: false,
      },
      {
        text: "Barreras de entrada y moat defensible",
        detail: "¿Qué impide que HAY lance una línea 'urbana'? ¿Qué impide que un competidor os copie? La identidad de marca es un moat real pero hay que articularlo como ventaja competitiva sostenible, no solo como estética.",
        have: true,
        critical: false,
      },
    ],
  },
  {
    id: "producto",
    title: "03 — PRODUCTO Y PRODUCCIÓN",
    why: "MicroBank y ENISA necesitan ver que el producto EXISTE (no es solo un render) y que la cadena de producción es viable y costeada.",
    status: "critico",
    items: [
      {
        text: "Prototipo físico fotografiado (no solo renders 3D)",
        detail: "Esto es la llave maestra. Sin foto de producto real, no hay dinero. El plan financiero lo dice claro. ¿Tenéis al menos una pieza fabricada? Si no, es la prioridad #1 absoluta.",
        have: false,
        critical: true,
      },
      {
        text: "Coste de producción unitario desglosado (BOM)",
        detail: "Tenéis el caso 'Bunker Table 01' con coste manufactura 115€, logística 12€, packaging 18€, fulfillment 25€ = COGS 170€ sobre PVP 380€. Esto es bueno pero necesita: cotizaciones reales de fabricantes, no estimaciones. Pedid 3 presupuestos.",
        have: true,
        critical: true,
      },
      {
        text: "Carta de intención o presupuesto de fabricante europeo",
        detail: "El plan menciona Polonia, Letonia, Portugal. ¿Habéis contactado fábricas? Un presupuesto real de un fabricante concreto vale más que 10 páginas de proyecciones. ENISA y MicroBank quieren ver que la producción es real, no teórica.",
        have: false,
        critical: true,
      },
      {
        text: "Plan de escalado de producción (lotes 50 → 200 → 500)",
        detail: "Cómo bajan los costes unitarios al escalar. A qué volumen necesitáis segundo fabricante. Lead times por lote. Esto demuestra que habéis pensado más allá del primer drop.",
        have: true,
        critical: false,
      },
      {
        text: "Logística y fulfillment definidos (última milla)",
        detail: "¿Quién almacena? ¿Quién envía? ¿Coste por envío peninsular/europeo? ¿Política de devoluciones? El coste de fulfillment de 25€ por pieza del plan financiero, ¿de dónde sale?",
        have: false,
        critical: false,
      },
      {
        text: "Propiedad intelectual (marca registrada, diseños industriales)",
        detail: "¿Habéis registrado RADI en EUIPO? ¿Los diseños están protegidos? Esto no solo protege — demuestra a los financiadores que vais en serio y que hay activos intangibles.",
        have: false,
        critical: false,
      },
    ],
  },
  {
    id: "financiero",
    title: "04 — MODELO FINANCIERO",
    why: "Es donde más solicitudes ENISA caen. Las proyecciones deben ser creíbles, coherentes entre sí, y demostrar capacidad de devolver el préstamo.",
    status: "critico",
    items: [
      {
        text: "Cuenta de resultados proyectada a 3-5 años (mensual año 1, trimestral año 2-3)",
        detail: "Tenéis proyecciones por trimestre en el plan financiero (Q1: 19k, Q2: 0, Q3: 53k, Q4: 76k). Falta: desglose mensual del primer año, y proyección a 36 meses mínimo. ENISA pide 3-5 años.",
        have: true,
        critical: true,
      },
      {
        text: "Balance de situación proyectado",
        detail: "No basta con P&L. ENISA evalúa la estructura financiera completa: activo (stock, tesorería, inmovilizado), pasivo (deuda, fondos propios). Sin balance, el analista no puede calcular ratios.",
        have: false,
        critical: true,
      },
      {
        text: "Cash flow proyectado (tesorería mes a mes)",
        detail: "El dato más importante para una startup. ¿Cuándo os quedáis sin caja? ¿Cuándo alcanzáis break-even de tesorería? ¿Cuál es el runway con y sin financiación? Esto es lo que ENISA mira primero.",
        have: false,
        critical: true,
      },
      {
        text: "Unit economics claros (CAC, LTV, margen contribución, payback)",
        detail: "Margen de contribución del 38% (144€ sobre 380€ PVP) está en el plan. Falta: CAC estimado (coste de adquirir un cliente), LTV (valor vida del cliente si repite compra), ratio LTV/CAC. Sin estas métricas, el modelo no está completo.",
        have: true,
        critical: true,
      },
      {
        text: "Hipótesis de crecimiento justificadas (no hockey stick sin base)",
        detail: "Pasar de 0 a 148k€ facturación en Q1 del año 1 es agresivo. Si las hipótesis no están ancladas en datos reales (tasa de conversión web del sector, tamaño de audiencia, etc.), el analista lo marca como irrealista.",
        have: false,
        critical: true,
      },
      {
        text: "Escenarios (optimista / base / pesimista)",
        detail: "ENISA valora que presentéis 3 escenarios. Demuestra madurez y realismo. El escenario pesimista debe seguir permitiendo devolver el préstamo — si no, el analista rechaza.",
        have: false,
        critical: true,
      },
      {
        text: "Uso detallado de fondos solicitados",
        detail: "No podéis pedir 40k€ 'para crecimiento'. Desglosad: X€ en moldes, Y€ en stock inicial, Z€ en marketing de lanzamiento. Vinculad cada euro a un objetivo medible.",
        have: false,
        critical: true,
      },
      {
        text: "Plan de devolución del préstamo",
        detail: "¿En qué año empezáis a generar suficiente cash flow para pagar cuotas? ¿Qué pasa si hay carencia de 2-5 años? Modelad el servicio de deuda dentro de las proyecciones.",
        have: false,
        critical: false,
      },
    ],
  },
  {
    id: "innovacion",
    title: "05 — INNOVACIÓN Y DIFERENCIACIÓN",
    why: "ENISA exige innovación. No necesita ser tecnológica — puede ser en modelo de negocio, proceso o propuesta de valor. Pero hay que articularlo explícitamente.",
    status: "fuerte",
    items: [
      {
        text: "Innovación claramente definida y diferenciada del mercado",
        detail: "Vuestro posicionamiento (streetwear del mueble, DNVB con identidad urbana) es innovador como modelo de negocio. Pero hay que traducirlo al lenguaje ENISA: 'modelo de negocio innovador basado en venta directa digital, producción por lotes bajo demanda, y construcción de comunidad como motor de adquisición'.",
        have: true,
        critical: true,
      },
      {
        text: "Ventaja competitiva sostenible documentada",
        detail: "El documento de marca es excelente aquí. La identidad visual, el sistema de packaging editorial, el acceso por número de serie — todo esto es diferenciación real. Formalizadlo como 'barreras de entrada'.",
        have: true,
        critical: true,
      },
      {
        text: "Componente digital/tecnológico articulado",
        detail: "ENISA FEPYME prioriza transformación digital. Enfatizad: e-commerce propietario, sistema de presale digital, comunidad digital con acceso por serial number, CRM y data-driven marketing. Esto no es tech-wash — es real.",
        have: true,
        critical: false,
      },
      {
        text: "Escalabilidad del modelo demostrada",
        detail: "ENISA rechaza modelos que requieren incremento lineal de recursos por cliente. RADI escala bien: diseñáis una vez, producís en lotes, vendéis online sin límite geográfico. Documentadlo explícitamente.",
        have: true,
        critical: true,
      },
    ],
  },
  {
    id: "comercial",
    title: "06 — ESTRATEGIA COMERCIAL Y MARKETING",
    why: "El plan debe demostrar que sabéis cómo vais a conseguir clientes, a qué coste, y con qué canal. La estrategia de marca es fuerte pero falta el funnel de conversión.",
    status: "parcial",
    items: [
      {
        text: "Funnel de adquisición completo (awareness → conversión)",
        detail: "Tenéis la estrategia de lanzamiento (moodboard IG, guerrilla, The Opener). Falta: ¿cuántas visitas web esperáis? ¿Qué tasa de conversión? ¿Cuánto invertís en ads? ¿Cuál es el CAC objetivo?",
        have: false,
        critical: true,
      },
      {
        text: "Estrategia de pricing justificada con análisis de willingness-to-pay",
        detail: "Sillas 200-300€, mesas 350-600€. ¿De dónde salen estos rangos? ¿Habéis validado con potenciales clientes? ¿Qué pasa si el mercado no acepta 250€ por una silla de una marca desconocida?",
        have: true,
        critical: false,
      },
      {
        text: "Plan de marketing con presupuesto y KPIs por canal",
        detail: "Instagram, newsletter, eventos. ¿Cuánto invertís en cada canal? ¿Qué resultado esperáis? El documento de marca tiene las tácticas pero falta el presupuesto y las métricas de éxito.",
        have: true,
        critical: true,
      },
      {
        text: "Pipeline de ventas o lista de espera con datos reales",
        detail: "Nada convence más que una lista de espera de 200 emails, o 5 interioristas que han dicho 'cuando tengáis producto, compro'. Esto es validación de demanda real.",
        have: false,
        critical: true,
      },
      {
        text: "Estrategia de retención y recompra",
        detail: "Un cliente que compra una silla, ¿cuándo compra la mesa? ¿Cómo lo reactiváis? El sistema de comunidad por serial number es bueno — cuantificad el impacto esperado en LTV.",
        have: true,
        critical: false,
      },
    ],
  },
  {
    id: "legal",
    title: "07 — ESTRUCTURA LEGAL Y SOCIETARIA",
    why: "Errores aquí causan inadmisión directa en ENISA. No es el apartado más creativo, pero es el más binario: o cumples o no.",
    status: "pendiente",
    items: [
      {
        text: "S.L. constituida e inscrita en Registro Mercantil",
        detail: "Sin esto, no podéis solicitar nada. Notaría + Registro Mercantil + alta censal. ENISA exige que la SL esté inscrita (no solo escriturada).",
        have: false,
        critical: true,
      },
      {
        text: "Capital social escriturado y desembolsado",
        detail: "El capital que aportéis debe estar en la cuenta de la empresa. Si decís 15k€ de capital social, tiene que haber 15k€ en el banco de la SL. ENISA verifica.",
        have: false,
        critical: true,
      },
      {
        text: "Alta IAE y censal en Hacienda (modelo 036)",
        detail: "Con el CNAE correcto. Elegid bien: 7410 (diseño especializado) os abre ICF Cultura. 3109 (fabricación de muebles) os posiciona como industria. Podéis tener ambos.",
        have: false,
        critical: true,
      },
      {
        text: "Alta de socios en régimen de autónomos (RETA)",
        detail: "Requisito para Activa Autòno+. Los dos socios administradores deben estar de alta.",
        have: false,
        critical: false,
      },
      {
        text: "Pacto de socios formalizado",
        detail: "¿Quién tiene qué porcentaje? ¿Qué pasa si uno quiere salir? ¿Cómo se toman decisiones? ENISA no lo exige formalmente pero demuestra madurez.",
        have: false,
        critical: false,
      },
    ],
  },
  {
    id: "riesgos",
    title: "08 — ANÁLISIS DE RIESGOS Y CONTINGENCIAS",
    why: "El documento de marca tiene un buen apartado de riesgos. Falta cuantificar el impacto y definir planes B concretos.",
    status: "parcial",
    items: [
      {
        text: "Matriz de riesgos con probabilidad × impacto",
        detail: "Tenéis 5 riesgos identificados en el documento de marca. Cuantificad: ¿qué probabilidad tiene cada uno (alta/media/baja)? ¿Qué impacto financiero? ¿Qué plan de contingencia?",
        have: true,
        critical: false,
      },
      {
        text: "Plan B si el primer drop no vende",
        detail: "50 unidades × 380€ = 19k€. ¿Qué pasa si solo vendéis 15? ¿Bajáis precio? ¿Pivotáis a B2B (hostels, coworkings)? Tener plan B demuestra madurez.",
        have: false,
        critical: true,
      },
      {
        text: "Sensibilidad a costes de producción",
        detail: "Si el acero sube un 20%, si el transporte desde Polonia se encarece, si el euro se debilita contra el zloty... ¿Qué impacto tiene en márgenes? ¿Cuánto margen de seguridad tenéis?",
        have: false,
        critical: false,
      },
      {
        text: "Riesgo de dependencia de proveedor único",
        detail: "Si vuestro fabricante en Polonia quiebra o sube precios, ¿tenéis alternativa? Tener 2-3 opciones cotizadas elimina un riesgo que los analistas sí consideran.",
        have: false,
        critical: false,
      },
    ],
  },
];

const STATUS_CONFIG = {
  fuerte: { label: "Fuerte", color: "#5A7E6D", bg: "#E8F5E9" },
  parcial: { label: "Parcial", color: "#E1864C", bg: "#FFF3E0" },
  critico: { label: "Gaps críticos", color: "#BE3B3A", bg: "#FFEBEE" },
  pendiente: { label: "Pendiente", color: "#666", bg: "#F5F5F5" },
};

export default function RADIAudit() {
  const [checks, setChecks] = useState(() => {
    const init = {};
    SECTIONS.forEach((s) =>
      s.items.forEach((item, i) => {
        init[`${s.id}-${i}`] = item.have;
      })
    );
    return init;
  });
  const [expanded, setExpanded] = useState({});
  const [activeSection, setActiveSection] = useState(null);

  const toggle = (key) => setChecks((p) => ({ ...p, [key]: !p[key] }));
  const toggleExpand = (key) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  const totalItems = SECTIONS.reduce((a, s) => a + s.items.length, 0);
  const totalChecked = Object.values(checks).filter(Boolean).length;
  const criticalItems = SECTIONS.flatMap((s) =>
    s.items.filter((item) => item.critical).map((item, i) => ({
      ...item,
      key: `${s.id}-${s.items.indexOf(item)}`,
    }))
  );
  const criticalDone = criticalItems.filter((item) => checks[item.key]).length;
  const criticalTotal = criticalItems.length;

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", maxWidth: 780, margin: "0 auto", padding: "0 0 2rem" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1.5, color: "var(--color-text-primary)" }}>RADI</span>
          <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>Business plan audit</span>
        </div>
        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", margin: "8px 0 0", lineHeight: 1.5 }}>
          Gap analysis cruzando los documentos de estrategia de marca y plan financiero contra los requisitos reales de ENISA, MicroBank, ICF Cultura y Barcelona Activa.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, marginBottom: 28 }}>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 16px" }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Progreso total</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>{totalChecked}/{totalItems}</div>
          <div style={{ height: 4, background: "var(--color-border-tertiary)", borderRadius: 2, marginTop: 8 }}>
            <div style={{ height: 4, background: "#5A7E6D", borderRadius: 2, width: `${(totalChecked / totalItems) * 100}%`, transition: "width 0.3s" }} />
          </div>
        </div>
        <div style={{ background: "#FFEBEE", borderRadius: "var(--border-radius-md)", padding: "12px 16px" }}>
          <div style={{ fontSize: 12, color: "#BE3B3A", marginBottom: 4 }}>Items críticos</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#BE3B3A" }}>{criticalDone}/{criticalTotal}</div>
          <div style={{ height: 4, background: "rgba(190,59,58,0.15)", borderRadius: 2, marginTop: 8 }}>
            <div style={{ height: 4, background: "#BE3B3A", borderRadius: 2, width: `${(criticalDone / criticalTotal) * 100}%`, transition: "width 0.3s" }} />
          </div>
        </div>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 16px" }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Readiness ENISA</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>
            {criticalDone >= criticalTotal * 0.8 ? "Ready" : criticalDone >= criticalTotal * 0.5 ? "Casi" : "No ready"}
          </div>
          <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 4 }}>
            {criticalDone >= criticalTotal * 0.8 ? "Podéis solicitar" : `Faltan ${criticalTotal - criticalDone} items críticos`}
          </div>
        </div>
      </div>

      {SECTIONS.map((section) => {
        const sectionChecked = section.items.filter((_, i) => checks[`${section.id}-${i}`]).length;
        const sc = STATUS_CONFIG[section.status];
        const isOpen = activeSection === section.id;

        return (
          <div key={section.id} style={{ marginBottom: 12 }}>
            <div
              onClick={() => setActiveSection(isOpen ? null : section.id)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "14px 16px", cursor: "pointer", userSelect: "none",
                background: isOpen ? "var(--color-background-secondary)" : "transparent",
                borderRadius: "var(--border-radius-md)",
                border: `0.5px solid ${isOpen ? "var(--color-border-secondary)" : "var(--color-border-tertiary)"}`,
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 11, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.15s", color: "var(--color-text-tertiary)" }}>▶</span>
              <span style={{ flex: 1, fontSize: 13, fontWeight: 500, letterSpacing: 0.5 }}>{section.title}</span>
              <span style={{
                fontSize: 11, fontWeight: 500, padding: "2px 10px",
                borderRadius: 99, background: sc.bg, color: sc.color,
              }}>{sc.label}</span>
              <span style={{ fontSize: 12, color: "var(--color-text-tertiary)", minWidth: 40, textAlign: "right" }}>
                {sectionChecked}/{section.items.length}
              </span>
            </div>

            {isOpen && (
              <div style={{ padding: "8px 0 8px 28px" }}>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 12px", lineHeight: 1.6, maxWidth: 600 }}>
                  {section.why}
                </p>
                {section.items.map((item, i) => {
                  const key = `${section.id}-${i}`;
                  const isChecked = checks[key];
                  const isExpanded = expanded[key];
                  return (
                    <div key={key} style={{ marginBottom: 6 }}>
                      <div style={{
                        display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 12px",
                        borderRadius: 6, background: isChecked ? "rgba(90,126,109,0.06)" : "transparent",
                        border: `0.5px solid ${item.critical && !isChecked ? "rgba(190,59,58,0.25)" : "transparent"}`,
                      }}>
                        <input
                          type="checkbox" checked={isChecked}
                          onChange={() => toggle(key)}
                          style={{ marginTop: 2, accentColor: "#5A7E6D", cursor: "pointer" }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span
                              onClick={() => toggleExpand(key)}
                              style={{
                                fontSize: 13, lineHeight: 1.4, cursor: "pointer",
                                textDecoration: isChecked ? "line-through" : "none",
                                color: isChecked ? "var(--color-text-tertiary)" : "var(--color-text-primary)",
                              }}
                            >
                              {item.text}
                            </span>
                            {item.critical && (
                              <span style={{
                                fontSize: 9, fontWeight: 600, padding: "1px 6px",
                                borderRadius: 3, background: isChecked ? "#E8F5E9" : "#FFEBEE",
                                color: isChecked ? "#5A7E6D" : "#BE3B3A",
                                whiteSpace: "nowrap",
                              }}>CRÍTICO</span>
                            )}
                          </div>
                          {isExpanded && (
                            <p style={{
                              fontSize: 12, color: "var(--color-text-secondary)",
                              margin: "6px 0 0", lineHeight: 1.6,
                              paddingLeft: 0, borderLeft: "2px solid var(--color-border-tertiary)",
                              paddingLeft: 10,
                            }}>
                              {item.detail}
                            </p>
                          )}
                        </div>
                        <span
                          onClick={() => toggleExpand(key)}
                          style={{ fontSize: 10, color: "var(--color-text-tertiary)", cursor: "pointer", marginTop: 3, whiteSpace: "nowrap" }}
                        >
                          {isExpanded ? "−" : "+"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div style={{
        marginTop: 28, padding: "16px 20px",
        background: "var(--color-background-secondary)",
        borderRadius: "var(--border-radius-lg)",
        border: "0.5px solid var(--color-border-tertiary)",
      }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
          Prioridad de ejecución
        </div>
        <div style={{ fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.7 }}>
          <span style={{ fontWeight: 500 }}>Semana 1-2:</span> Prototipo físico + contactar fabricantes (cotizaciones reales)
          <br />
          <span style={{ fontWeight: 500 }}>Semana 2-3:</span> Modelo financiero completo (P&L + balance + cash flow a 36 meses)
          <br />
          <span style={{ fontWeight: 500 }}>Semana 3-4:</span> Validación de demanda (lista espera, compromisos interioristas)
          <br />
          <span style={{ fontWeight: 500 }}>Mes 2:</span> Constituir S.L. + formalizar capital + alta autónomos
          <br />
          <span style={{ fontWeight: 500 }}>Mes 2-3:</span> Ensamblar Business Plan completo → Barcelona Activa para validación
        </div>
      </div>
    </div>
  );
}
