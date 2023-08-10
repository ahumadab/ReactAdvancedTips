import "./App.css";

import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/darcula";

import { Color } from "./components/Color";
import { ColorCode } from "./components/Color/Color";
import {
  CounterBadOne,
  CounterBadTwo,
  CounterWithCustomHookOne,
  CounterWithCustomHookTwo,
} from "./components/Counter";
import { counterBadOneCode } from "./components/Counter/CounterBad/CounterBadOne";
import { counterBadTwoCode } from "./components/Counter/CounterBad/CounterBadTwo";
import { CounterWithCustomHookOneCode } from "./components/Counter/CounterWithCustomHook/CounterWithCustomHookOne";
import { CounterWithCustomHookTwoCode } from "./components/Counter/CounterWithCustomHook/CounterWithCustomHookTwo";
import { useCounterCode } from "./components/Counter/CounterWithCustomHook/useCounter";
import { mathTextCode } from "./components/Counter/MathStrat";
import { CounterColor } from "./components/CounterAndColor";
import { CounterColorCode } from "./components/CounterAndColor/CounterColor";
import { Navbar } from "./components/Navbar/Navbar";

SyntaxHighlighter.registerLanguage("jsx", jsx);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      <main className="container">
        <div role="document">
          <section>
            <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
              Custom hook
            </h1>
            <p>
              Dans bien beaucoup de projets react, il est fréquent de trouver
              des composants qui rassemblent toutes les parties d'une
              application front au même endroit. De la partie "Vue" (HTML, CSS)
              à la partie "Logique" (Javascript/Typescript). C'est la
              philosophie même de React.
              <br />
              Cependant, il est très courant que cette philosophie entraine des
              incompréhensions pour ces utilisateurs, entrainant des erreurs de
              développement qui nuis à la productivité, maintenabilité et à
              l'expérience développeur.
            </p>
            <h5 style={{ textAlign: "center", marginTop: "5em" }}>
              Sans custom hook
            </h5>
            <p>
              Ces deux composant se ressemble beaucoup, ils retournent
              concrètement le même html mais avec un ordre différent. Ici on ne
              s'occupera pas de ça.
              <br />
              Ils dépendent tous les deux d'un bout de code qui définis les
              différentes façon d'augmenter le compteur.{" "}
              <a onClick={() => setIsOpen((isOpen) => !isOpen)}>Voir le code</a>
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <CounterBadOne />
              <CounterBadTwo />
            </div>
            <dialog open={isOpen}>
              <article>
                <header>
                  <a
                    href="#close"
                    aria-label="Close"
                    className="close"
                    onClick={() => setIsOpen(false)}
                  ></a>
                </header>
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {mathTextCode}
                </SyntaxHighlighter>
              </article>
            </dialog>

            <p>
              Bien que leur logique soit minime, c'est bien celles-ci qui nous
              intéresse.
              <br />
              Ces composants dupliquent exactement la même intention et le même
              code, ce qui nous ralentit sur le développement des autres
              features. Il se pourrait que nous voulions dans un avenir ajouter
              ou modifier des fonctionnalité à ces composants. Il nous faudrait
              donc dupliquer le code pour chacun des composants si on reste dans
              cette optique. Imaginez si il existait un nombre incalculable du
              même genre de composant ... <br />
              Il serait donc intéressant de rassembler leur concept et même de
              les identifier par leur logique, leur intention.
            </p>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <SyntaxHighlighter
                language="jsx"
                showLineNumbers
                style={dracula}
                customStyle={{ width: "47%" }}
                codeTagProps={{
                  style: {
                    marginLeft: "-2.5em",
                  },
                }}
              >
                {counterBadOneCode}
              </SyntaxHighlighter>
              <SyntaxHighlighter
                language="jsx"
                showLineNumbers
                style={dracula}
                customStyle={{ width: "47%" }}
                codeTagProps={{
                  style: {
                    marginLeft: "-2.5em",
                  },
                }}
              >
                {counterBadTwoCode}
              </SyntaxHighlighter>
            </div>

            <h5 style={{ textAlign: "center", marginTop: "5em" }}>
              Avec custom hook
            </h5>
            <p>
              Le custom hook est une des solutions qui résout cette
              problématique. <br />
              Son principe est simple, il n'est rien qu'une simple fonction qui
              va englober les hooks React utile pour la réalisation du concept
              identifié. Il rassemble les états (States), actions (fonctions) et
              évenements de cycle de vie (Effect) nécessaire pour son bon
              fonctionnement.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5%",
                marginBottom: "1.5em",
              }}
            >
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
                codeTagProps={{
                  style: {
                    marginLeft: "-2.5em",
                  },
                }}
              >
                {useCounterCode}
              </SyntaxHighlighter>
              <div
                style={{
                  maxWidth: "40%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <p>
                    Ce custom hook ici est appelé <i>useCounter</i>. La
                    convention pour nommer un hook en React est de le préfixer
                    par <i>use</i>.
                  </p>
                  <p>
                    Comme expliqué précedement, il s'agit juste d'une simple
                    fonction qui retournera donc un object qui respectera
                    l'interface déclarée au dessus.
                  </p>
                  <p>
                    L'interface <i>IuseCounter</i> permet de détailler ce que le
                    hook retournera. Contrairement à ce qui était utilisé dans
                    les composants précédents, ici il est assez simple de
                    déclarer que l'interface aura des méthodes qui ont un sens
                    dans la logique du Counter. Les méthodes <i>increase()</i>,{" "}
                    <i>reset()</i> et <i>changeStrategy()</i> sont explicite de
                    par leur nom.
                  </p>
                  <p>
                    Enfin, après la déclaration des variables et fonctions, le
                    custom hook retourne un simple objet qui aura les propriétés
                    nécessaire pour respecter l'interface.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Pour finir cette partie, voici comment ces deux composant
              consomment ce custom hook.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "1.5em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CounterWithCustomHookOne />
                <SyntaxHighlighter
                  language="jsx"
                  showLineNumbers
                  style={dracula}
                  customStyle={{ width: "100%" }}
                  codeTagProps={{
                    style: {
                      marginLeft: "-2.5em",
                    },
                  }}
                >
                  {CounterWithCustomHookOneCode}
                </SyntaxHighlighter>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CounterWithCustomHookTwo />
                <SyntaxHighlighter
                  language="jsx"
                  showLineNumbers
                  style={dracula}
                  customStyle={{ width: "100%" }}
                  codeTagProps={{
                    style: {
                      marginLeft: "-2.5em",
                    },
                  }}
                >
                  {CounterWithCustomHookTwoCode}
                </SyntaxHighlighter>
              </div>
            </div>
            <p>
              En soit, il n'y a pas spécialement de différence de fonctionnalité
              entre ces deux manières.
              <br /> Cependant cette manière offre beaucoup plus d'avantages:
              <br />
              <li>
                En effet, cette fonction peut être appelée à plusieurs endroit
                quand il est nécessaire, il devient donc réutilisable.
              </li>
              <li>
                En déplaçant cette complexité dans une autre fonction, ce custom
                hook permet d'abstraire cette logique complexe derrière une
                interface simple et facile à utiliser. Cela rend le code des
                composants plus lisible et plus simple à comprendre.
              </li>
              <li>
                Ce déplacement permet aussi de maintenir la séparation des
                préoccupations, il offre une meilleure organisation du projet et
                facilite son architecture.
              </li>
              <li>
                De plus, il est plus simple d'isoler le processus logique avec
                cette approche afin de faciliter la réalisation de ses tests.
              </li>
              <li>
                Enfin, il permet d'éviter d'avoir des implémentations de
                libraires externes directement dans les composants et facilite
                leur maintient sur le long terme.
              </li>
            </p>
            <h5 style={{ textAlign: "center" }}>
              Pour aller plus loin, réutilisation plusieurs hooks
            </h5>
            <p>
              Il est possible de faire cumuler plusieurs custom hook qui n'ont
              pas les mêmes responsabilités. Voici 3 composants qui ont chacun
              leur propre codebase. Les deux premiers utilisent différents
              custom hook (respectivement <i>useCounter</i> et <i>useColor</i>)
              et le dernier qui utilise les deux.
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CounterWithCustomHookOne />
                <SyntaxHighlighter
                  language="jsx"
                  showLineNumbers
                  style={dracula}
                  customStyle={{ width: "100%" }}
                  codeTagProps={{
                    style: {
                      marginLeft: "-2.5em",
                      fontSize: "0.7em",
                    },
                  }}
                >
                  {CounterWithCustomHookOneCode}
                </SyntaxHighlighter>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Color />
                <SyntaxHighlighter
                  language="jsx"
                  showLineNumbers
                  style={dracula}
                  customStyle={{ width: "100%" }}
                  codeTagProps={{
                    style: {
                      marginLeft: "-2.5em",
                      fontSize: "0.7em",
                    },
                  }}
                >
                  {ColorCode}
                </SyntaxHighlighter>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CounterColor />
                <SyntaxHighlighter
                  language="jsx"
                  showLineNumbers
                  style={dracula}
                  customStyle={{ width: "100%" }}
                  codeTagProps={{
                    style: {
                      marginLeft: "-2.5em",
                      fontSize: "0.7em",
                    },
                  }}
                >
                  {CounterColorCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </section>
          <footer>
            <hr />
            <p>
              <small>🌐 Vep Industries &trade;</small>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
