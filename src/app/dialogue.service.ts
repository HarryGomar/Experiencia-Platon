import { Injectable } from '@angular/core';
import { DialogueNode } from './dialogue-node';

@Injectable({
  providedIn: 'root'
})

export class DialogueService {
  private dialogueNodes: DialogueNode[] = [
    {id: 0, speaker: 'CRITÓN - PLATÓN', text: '', choices: [{ text: 'Entrar', next: 55 }]},
    {id: 1, speaker: 'C', text: 'Leyes', next: [2]},
    {id: 2, speaker: 'S', text: 'Soy esclavo de las leyes...', next: [81]},
    {id: 3, speaker: 'C', text: 'Hijos', next: [4]},
    {id: 4, speaker: 'S', text: 'Hijos...', next: [88]},
    {id: 5, speaker: 'C', text: 'Exilo', next: [6]},
    {id: 6, speaker: 'S', text: 'Pude haberme exiliado...', next: [89]},
    {id: 7, speaker: 'C', text: 'Ciudad', next: [8]},
    {id: 8, speaker: 'S', text: 'Amo la ciudad...', next: [91]},
    {id: 9, speaker: 'C', text: 'Amigos', next: [10]},
    {id: 10, speaker: 'S', text: 'Mis amigos...', next: [95]},
    {id: 11, speaker: 'C', text: 'El extranjero', next: [12]},
    {id: 12, speaker: 'S', text: 'Ciudades extranjeras...', next: [96]},
    {id: 13, speaker: 'C', text: 'Está bien dicho.', next: [42]},
    {id: 14, speaker: 'S', text: 'Veamos, en primer lugar, si retomamos el razonamiento respecto a las opiniones de los hombres. ¿Teníamos razón o no, cuando decíamos que se ha de prestar atención a unas opiniones y a otras no? ¿o es que antes de que yo debiera morir estaba bien dicho y ahora, por el contrario, resulta que lo decíamos en vano, por hablar, y eran en realidad niñerías y chiquillerías?', next: [28]},
    {id: 15, speaker: 'C', text: 'De ningún modo', next: [23]},
    {id: 16, speaker: 'S', text: 'Bien. Si no obedece a ése y menosprecia su opinión y sus alabanzas y, por el contrario, estima las palabras de la mayoría, que no entiende nada, ¿no sufrirá algún daño?', next: [36]},
    {id: 17, speaker: 'C', text: 'De ningún modo.', next: [24]},
    {id: 18, speaker: 'S', text: '¿Qué daño es éste, y a qué afecta? ¿a qué parte del que no ha hecho caso?', next: [107], choices: [{next: 105, text: 'Cuerpo'}, {next: 107, text: 'Alma', 'direct': true}], type: 'block'},
    {id: 19, speaker: 'C', text: 'Sin duda que mucho más.', next: [25]},
    {id: 20, speaker: 'S', text: 'Dices bien. Lo mismo ocurre, Critón, con las demás cosas, para no ir enumerándolas todas. Así sucede también respecto a lo justo y lo injusto, lo innoble y lo noble, lo bueno y lo malo, asuntos que son el objeto de nuestra actual discusión. ¿Debemos nosotros seguir la opinión de la mayoría y temerla, o la de uno solo que entienda, si lo hay, al cual es necesario respetar y temer más que a todos los demás juntos? Si no seguimos a éste, dañaremos y destruiremos aquello que se mejoraba con lo justo y se destruía con lo injusto. ¿No es así?', next: [38]},
    {id: 21, speaker: 'S', text: 'En fin, si lo que se mejora por medio de lo sano y se destruye por lo enfermo, lo destruimos por obedecer la opinión de los que no entienden, ¿nos es posible vivir una vez destruido eso? Y, de alguna manera, hablamos del cuerpo ¿no?', next: [40]},
    {id: 22, speaker: 'S', text: '¿Nos es posible vivir con un cuerpo mísero y corrupto?', next: [15], choices: [{next: 15, text: 'No'}]},
    {id: 23, speaker: 'S', text: 'Entonces, ¿podemos vivir estando destruido aquello a lo que la injusticia daña y la justicia beneficia? ¿o consideramos que es de menos valor que el cuerpo aquella parte de nosotros mismos en cuyo entorno están la injusticia y la justicia?', next: [17]},
    {id: 24, speaker: 'S', text: 'Por tanto, ¿es más estimable?', next: [19]},
    {id: 25, speaker: 'S', text: 'Entonces, querido amigo, no debemos preocuparnos mucho de lo que diga la mayoría, sino de lo que diga el entendido en lo justo e injusto; sólo él y la verdad deben preocuparnos. De manera que, en primer lugar, no juzgas rectamente al considerar que debemos preocuparnos de la opinión de la mayoría respecto a lo justo, lo noble y lo bueno, y sus contrarios. Aunque, sin duda, podría decir alguno que la mayoría es capaz de condenarnos a muerte.', next: [26]},
    {id: 26, speaker: 'S', text: 'Escoger lo que dice el más sabio en su area', next: [136]},
    {id: 27, speaker: 'C', text: 'Sí.', next: [35]},
    {id: 28, speaker: 'S', text: 'Deseo vivamente, Critón, examinar contigo si este razonamiento me parece diferente en algo, cuando me encuentro en esta situación, o es el mismo, y si lo hemos de dejar correr o lo hemos de seguir', next: [30]},
    {id: 29, speaker: 'C', text: '¿Cómo no?', next: [37]},
    {id: 30, speaker: 'S', text: 'Según creo, dicen los que se consideran entendidos poco más o menos lo que decía yo hace un momento, que, de entre las opiniones que los hombres manifiestan, debemos estimar unas en mucho y otras no.', next: [32]},
    {id: 31, speaker: 'C', text: 'A la de uno solo.', next: [39]},
    {id: 32, speaker: 'S', text: 'Esto, Critón, ¡por los dioses!, ¿no te parece que está bien dicho? Pues tú, según la previsión humana, estás libre de tener que morir mañana, y la presente desgracia no te va a ofuscar. Examínalo. ¿No te parece que se ha dicho suficientemente que no se deben estimar todas las opiniones de los hombres, sino unas sí y otras no, y tampoco las de todos, sino las de unos sí y las de otros no? ¿Qué dices? ¿No está bien dicho esto?', next: [13], choices: [{next: 13, text: 'Sí'}]},
    {id: 33, speaker: 'C', text: 'Es evidente', next: [41]},
    {id: 34, speaker: 'C', text: 'Así es.', next: [16]},
    {id: 35, speaker: 'S', text: '¿Las buenas no son las de los sensatos y las malas las de los insensatos?', next: [29]},
    {id: 36, speaker: 'C', text: '¿Cómo no?', next: [18]},
    {id: 37, speaker: 'S', text: 'Veamos qué es lo que se quería decir con todo esto. Un hombre que se ejercita haciendo gimnasia, ¿presta atención a la alabanza, la censura y la opinión de cualquier hombre, o a la de uno solo, la del médico o entrenador?', next: [31]},
    {id: 38, speaker: 'C', text: 'Yo al menos, así lo creo, Sócrates.', next: [21]},
    {id: 39, speaker: 'S', text: 'Por consiguiente, ha de temer los reproches y recibir con agrado las alabanzas de uno solo, y no las de la mayoría.', next: [33], choices: [{next: 33, text: 'Evidentemente'}]},
    {id: 40, speaker: 'C', text: 'Sí', next: [22]},
    {id: 41, speaker: 'S', text: 'Así pues, ha de obrar y ejercitarse, y comer y beber según la opinión de ése solo, del que le guía y es entendido, y no según las opiniones de todos los demás.', next: [34]},
    {id: 42, speaker: 'S', text: '¿Y no es verdad que hay que estimar las buenas y no las malas?', next: [27], choices: [{next: 27, text: 'Sí'}]},
    {id: 43, speaker: 'C', text: 'No tengo nada más que decir, Sócrates.', next: [47]},
    {id: 44, speaker: 'L', text: 'En fin, Sócrates, obedécenos a nosotras, que te hemos criado, y ni a tus hijos ni a tu vida ni a ninguna otra cosa estimes en más que a la justicia, para que, al llegar al Hades, puedas alegar en tu defensa esto ante los que allí gobiernan.\n\nPues aquí, es evidente que obrar de tal modo ni para ti ni para ninguno de los tuyos es mejor, ni más justo ni más piadoso, ni tampoco será mejor cuando llegues allí. Si te marchas ahora, te vas habiendo sido condenado injustamente no por nosotras, las leyes, sino por los hombres.', next: [46]},
    {id: 45, speaker: 'S', text: 'Has de saber, querido amigo Critón, que yo creo oír esto, como los coribantes creen oír las flautas, y en mí retumba el eco de estas palabras y hace que no pueda oír las demás. Y además, al menos en lo que por ahora a mí me parece bien, si dices algo en contra, hablarás en vano. Sin embargo, si crees que puedes conseguir algo más, habla', next: [43]},
    {id: 46, speaker: 'L', text: 'En cambio, si huyes de forma tan vergonzosa, devolviendo injuria por injuria, mal por mal, habiendo quebrantado tus acuerdos y tus pactos con nosotras, y habiendo hecho daño a los que menos conviene, a ti mismo, a tus amigos, a la patria y a nosotras, entonces nosotras, mientras vivas, estaremos irritadas contigo, y allí, en el Hades, nuestras hermanas las leyes no te recibirán bien, sabiendo que intentaste destruirnos en la medida de tus fuerzas.\n\nVamos, que no te convenza Critón a hacer lo que dice más que nosotras.', next: [45]},
    {id: 47, speaker: 'S', text: 'Bien, Critón, obremos así, puesto que así lo aconseja la divinidad.', next: []},
    {id: 48, speaker: 'L', text: 'Pues no violas otra cosa, dirían, sino los pactos y los acuerdos que con nosotras mismas hiciste, no por necesidad ni habiendo sido engañado ni obligado a decidir en poco tiempo, sino en setenta años, en los que te fue posible ir a otro lugar, si no te agradábamos o no te parecían justos los acuerdos. Sin embargo, tú no preferiste ni Lacedemonia ni Creta, las cuales siempre dices que están bien gobernadas, ni tampoco ninguna otra ciudad griega ni bárbara, sino que de ésta has estado ausente menos que los cojos, los ciegos y los demás lisiados. De este modo, es evidente que la ciudad y nosotras, las leyes, te agradábamos más a ti que a los demás atenienses. ¿A quién le agradaría una ciudad sin leyes? ¿No vas a permanecer fiel ahora a lo acordado? Sí nos obedecerás, Sócrates, y así no quedarás en ridículo marchándote de la ciudad.', type: 'dead end'},
    {id: 49, speaker: 'C', text: 'Sócrates, ten presente todo esto, no sea que, al mismo tiempo que un daño, sea también una deshonra para ti y para nosotros', next: [50]},
    {id: 50, speaker: 'S', text: 'Amigo Critón, tu buena voluntad sería merecedora de mucha estima, si tuviera alguna rectitud; si no, cuanto mayor, tanto más enojosa. En fin, es necesario que nosotros consideremos si se ha de obrar así o si no. Porque yo, ahora y siempre, he sido de tal condición que no he obedecido a ningún otro de mis impulsos sino a la razón, la cual, examinándola, se me aparece como la mejor.\n\nLos razonamientos que decía anteriormente no soy capaz ahora de desecharlos, una vez que me ha venido esta adversidad; es más, de algún modo me siguen pareciendo iguales, y honro y respeto los mismos razonamientos que antes. Si no somos capaces de exponer ahora otros mejores que aquellos, has de saber que no cederé ante ti, ni aunque la fuerza de la mayoría nos asuste, como se asusta con duendes a nuestros niños, imponiéndonos prisión, muerte y privación de bienes. ¿Cómo podríamos examinar eso más adecuadamente?', next: [14]},
    {id: 51, speaker: 'C', text: 'Además, se ha de elegir lo que un hombre honrado y bueno elegiría, al menos cuando uno afirma que se ha preocupado toda la vida de ejercitar la virtud. De manera que yo mismo me avergüenzo por ti y por nosotros, tus amigos, de que pueda parecer que todo este asunto en torno a ti se ha realizado con una cierta cobardía por nuestra parte, tanto la comparecencia ante el tribunal - que, habiéndose podido evitar, tuvo lugar- y el mismo proceso del juicio, como este final ciertamente absurdo. Y que parezca que nosotros - puesto que no te salvamos, ni tú a ti mismo- hemos rehuido este asunto por cierta incapacidad o por cierta cobardía nuestra, cuando era posible y realizable si hubiese existido en nosotros un mínimo interés por pequeño que fuese.', type: 'dead end'},
    {id: 52, speaker: 'C', text: 'Lo intentaré.', next: [68]},
    {id: 53, speaker: 'S', text: 'Por consiguiente, debemos examinar esto a partir de lo acordado, si es justo que yo intente salir de aquí, no dejándome libre los atenienses, o si no es justo. Si nos parece que es justo, intentémoslo, pero si no, dejémoslo\n\nY si resulta que obramos de forma injusta, no es necesario ya tener en cuenta si hemos de morir, permaneciendo aquí y soportándolo con tranquilidad, o sufrir cualquier otra adversidad, antes que obrar injustamente.\n\nMira si te parece que está bien establecido el principio del razonamiento, e intenta responder como mejor creas a mis preguntas.', next: [52]},
    {id: 54, speaker: 'C', text: 'En efecto, es muy pronto.', next: [57]},
    {id: 55, speaker: 'S', text: '¿Cómo llegas a estas horas, Critón? ¿No es todavía temprano?', next: [54], choices: [{next: 54, text: 'Es muy pronto'}]},
    {id: 56, speaker: 'C', text: 'La del alba.', next: [59]},
    {id: 57, speaker: 'S', text: '¿Qué hora, aproximadamente?', next: [56]},
    {id: 58, speaker: 'C', text: 'Ya es amigo mío, Sócrates, de tanto venir por aquí, y además, algún que otro favor se ha sacado también de mí.', next: [61]},
    {id: 59, speaker: 'S', text: 'Me extraña que el guardián de la cárcel haya querido atenderte.', next: [58], choices: [{next: 58, text: 'Ya es amigo'}]},
    {id: 60, speaker: 'C', text: 'Llevo bastante rato.', next: [63]},
    {id: 61, speaker: 'S', text: '¿Llegas ahora, o llevas ya un rato aquí?', next: [60]},
    {id: 62, speaker: 'C', text: 'Por Zeus, Sócrates, tampoco yo querría estar en tan gran desvelo y dolor. Sin embargo, hace rato que me admiro de ver cuán dulcemente duermes. Y adrede no te desperté, para que pasases el tiempo lo más agradablemente posible. Sin duda, muchas veces durante toda la vida envidié tu manera de ser, pero mucho más en la presente desgracia, al considerar con cuánta facilidad y tranquilidad la soportas.', next: [65]},
    {id: 63, speaker: 'S', text: 'Entonces, ¿cómo no me has despertado inmediatamente, en lugar de estarte ahí sentado en silencio?', next: [62]},
    {id: 64, speaker: 'C', text: 'También otros de tu edad se ven inmersos en situaciones como ésta, pero en nada les libra la edad de no indignarse por su suerte.', next: [66]},
    {id: 65, speaker: 'S', text: 'Sin duda, Critón, sería inoportuno indignarme, a mi edad, si es necesario morir ya', next: [64]},
    {id: 66, speaker: 'S', text: 'Así es, pero ¿por qué has venido tan pronto?', choices: [{next: 117, text: 'Tengo malas noticias'}]},
    {id: 67, speaker: 'C', text: 'Es evidente que no.', next: [72]},
    {id: 68, speaker: 'S', text: '¿Afirmamos que en ningún caso se ha de obrar injustamente de forma voluntaria? ¿o en ciertos casos sí y en otros no? ¿o de ningún modo el obrar injustamente es bueno y noble, como hemos convenido en otras muchas ocasiones anteriores? ¿es como lo decíamos nosotros entonces, lo afirme o lo niegue la mayoría y, aunque sea necesario que nosotros suframos cosas mejores o peores que éstas, cometer injusticia es, en cualquier caso, malo y vergonzoso para el que la comete? ¿lo afirmamos o no?', next: [106], choices: [{next: 106, text: 'Si', 'direct': true}, {next: 108, text: 'No'}], type: 'block'},
    {id: 69, speaker: 'C', text: 'Sin duda que no es conveniente, Sócrates', next: [74]},
    {id: 70, speaker: 'S', text: 'Entonces, de ningún modo se ha de obrar injustamente.\n\nLuego, ni siquiera el que es tratado injustamente ha de devolver mal por mal, como piensa la mayoría, ya que de ninguna manera se ha de obrar injustamente', next: [67]},
    {id: 71, speaker: 'C', text: 'De ningún modo', next: [76]},
    {id: 72, speaker: 'S', text: 'Por tanto, Critón, ¿se debe hacer el mal, o no?', next: [69], choices: [{next: 69, text: 'No es conveniente'}]},
    {id: 73, speaker: 'C', text: 'Dices la verdad', next: [77]},
    {id: 74, speaker: 'S', text: '¿Y es justo, como dice la mayoría, que el que sufre algún mal responda con nuevos males, o no?', next: [71]},
    {id: 75, speaker: 'C', text: 'Se han de hacer.', next: [78]},
    {id: 76, speaker: 'S', text: 'Pues sin duda el hacer mal a los hombres no difiere en nada del ser injusto', next: [73], choices: [{next: 73, text: 'Dices la verdad'}]},
    {id: 77, speaker: 'S', text: 'Luego, ni se ha de responder a la injusticia ni se ha de hacer daño a ningún hombre, cualquiera que sea el mal que de él se reciba\n\nLas cosas que alguien ha convenido con otro que son justas, ¿se han de hacer o se han de burlar?', next: [75]},
    {id: 78, speaker: 'S', text: 'Reflexiona a partir de esto. Si salimos de aquí nosotros sin haber persuadido a la ciudad, ¿hacemos daño a alguien, y precisamente a quien menos se debe, o no?', next: [44], choices: [{next: 1, text: 'Leyes'}, {next: 3, text: 'Hijos'}, {next: 5, text: 'Exilo'}, {next: 7, text: 'Ciudad'}, {next: 9, text: 'Amigos'}, {next: 11, text: 'El extranjero'}], type: 'block'},
    {id: 79, speaker: 'C', text: 'Esto, por Zeus, Sócrates.', next: [84]},
    {id: 80, speaker: 'L', text: 'En primer lugar, ¿no te dimos nosotras la vida y, por medio de nosotras, desposó tu padre a tu madre y te engendró? Di, ¿tienes algo que reprochar a las leyes que se refieren al matrimonio?” “No tengo nada que reprecharles”, diría yo\n\n“¿Y a las que se refieren a la crianza de los hijos y a la educación, en la cual tú también has sido educado? ¿acaso no disponían bien aquellas de nosotras establecidas para ello, recomendando a tu padre que te educase en la música y en la gimnasia?”', next: [86]},
    {id: 81, speaker: 'S', text: 'Considéralo del modo siguiente. Si a nosotros que tenemos la intención de escapar de aquí, o como sea conveniente nombrar a esto, llegaran las leyes y el estado y, colocándose delante, nos preguntaran: “Dime, Sócrates, ¿qué tienes proyectado hacer? ¿No es cierto que, con esta acción que intentas, proyectas destruirnos a nosotras las leyes y a toda la ciudad, en lo que de ti depende? ¿Te parece a ti posible que pueda aún existir sin arruinarse una ciudad en la que los juicios que se producen no tienen ningún poder, sino que son destruidos por particulares y resultan nulos?”\n\n¿Acaso les diremos: “La ciudad nos ha tratado injustamente y no ha realizado el juicio correctamente”? ¿Les diremos esto o qué?', next: [79]},
    {id: 82, speaker: 'C', text: '¿Por qué?', next: [85]},
    {id: 83, speaker: 'L', text: '“Entonces, si gracias a nosotras naciste, fuiste criado y educado, ¿podrías decir, en principio, que no eras resultado de nosotras y esclavo nuestro, tú y tus progenitores? Y si es así, ¿crees que tenemos los mismos derechos? ¿Y es justo que tú nos hagas lo mismo que nosotras intentamos hacerte?', next: [82]},
    {id: 84, speaker: 'S', text: 'Y qué diríamos, si las leyes dijeran: “Sócrates, ¿es esto lo que convinimos tú y nosotras, o más bien convinimos permanecer fieles en las decisiones judiciales que la ciudad determinase?” Si nos extrañásemos de sus palabras, quizás dijeran: “Sócrates, no te extrañes de nuestras palabras y responde, tú que tan acostumbrado estás a servirte de preguntas y respuestas. Vamos a ver, ¿qué acusación tienes contra nosotras y contra la ciudad para intentar destruirnos?', next: [80]},
    {id: 85, speaker: 'L', text: 'Pues, tus derechos no serían iguales respecto a tu padre y a tu dueño, si lo tuvieras, de manera que pudieras responderles haciéndoles lo mismo que ellos te hicieran, insultando si fueras insultado, golpeando si fueras golpeado, y otras muchas cosas de este estilo.\n\n¿Te sería posible, en cambio, obrar con respecto a la patria y a las leyes de manera que, si nosotras nos proponemos matarte, considerando que es justo, tú intentes, en la medida de tus fuerzas, destruirnos a nosotras, las leyes, y a la patria, y afirmes que, al hacer esto, haces algo justo tú, que en verdad te ocupas de ejercitar la virtud?', next: [87]},
    {id: 86, speaker: 'S', text: '“Sí”, afirmaría yo.', next: [83]},
    {id: 87, speaker: 'L', text: '¿Acaso eres tan sabio que se te escapa que merece la patria más honor que la madre, el padre y todos los antepasados, y que es más venerable y más sagrada y digna de la mayor estima entre los dioses y entre los hombres de juicio; y que hay que respetar y obedecer y halagar más a la patria, si se irrita, que al padre; y que hay que persuadirla u obedecerla en lo que ella mande; y que, si manda sufrir algo, hay que soportarlo con mansedumbre, ya sea ser azotado como ser encarcelado, o ir a la guerra para ser herido o morir; y que hay que hacer esto porque es lo justo; y que no hay que ceder, ni retroceder, ni abandonar el puesto de batalla, sino que, incluso en la guerra y en la cárcel, y en todo lugar, hay que hacer lo que mande la patria y la ciudad, o persuadirla de lo que es justo por naturaleza; y que no es piadoso maltratar a la madre y al padre, pero menos piadoso aun es maltratar a la patria?”', next: [48]},
    {id: 88, speaker: 'L', text: 'Pero, ¿es a causa de tus hijos por lo que quieres vivir, para criarlos y educarlos? ¿Cómo? ¿Llevándotelos a Tesalia los vas a criar y a educar allí, haciéndolos extranjeros para que también obtengan de ti ese beneficio? ¿O no es eso, sino que educándose aquí se van a criar y a educar mejor, si tú estás vivo, aunque no estés tú con ellos? Ciertamente, tus amigos se ocuparán de ellos. ¿Es que se preocuparán de ellos si partes hacia Tesalia, y si vas al Hades, no? Si, en efecto, existe alguna deuda de los que afirman que son tus amigos, es necesario creer que sí que los cuidarán.', type: 'dead end'},
    {id: 89, speaker: 'L', text: 'Pues bien, te hubiera sido posible, en este mismo proceso, pedir para ti el destierro, si hubieras querido, y lo que ahora intentas contra la voluntad de la ciudad, entonces lo habrías hecho con su consentimiento\n\nEntonces tú te vanagloriabas de que no te enojarías, si era preciso morir, y elegías, según afirmabas, la muerte antes que el destierro. Ahora, por el contrario, ni respetas aquellas palabras, ni te preocupas de nosotras, las leyes; intentas destruirnos y haces lo que el esclavo más ruin haría, al procurar escaparte en contra de los pactos y los acuerdos según los cuales acordaste con nosotras vivir como ciudadano.', next: [90]},
    {id: 90, speaker: 'L', text: 'Tú, con obras, y no con palabras, estuviste de acuerdo en vivir como ciudadano según nosotras', type: 'dead end'},
    {id: 91, speaker: 'L', text: 'Examina, además, Sócrates, si es verdad esto que decimos, que no es justo que trates de hacernos lo que ahora intentas. Nosotras te hemos engendrado, criado y educado, y te hemos hecho partícipe de todos los bienes que hemos podido, a ti y a todos los demás ciudadanos y, a pesar de esto, declaramos públicamente que cualquier ateniense que lo desee, después de que haya alcanzado la ciudadanía y haya conocido los asuntos públicos y a nosotras, las leyes, si no le satisfacemos, puede libremente coger sus cosas y marcharse adonde quiera\n\nY ninguna de nosotras, las leyes, es obstáculo ni se opone a que, si alguno de vosotros quiere marcharse a una colonia, si no somos de su gusto ni nosotras ni la ciudad, o si quiere irse a otra parte y vivir en el extranjero, se vaya donde le plazca, llevándose lo suyo.', next: [93]},
    {id: 92, speaker: 'L', text: 'Sócrates, grandes son las pruebas que tenemos de que éramos de tu agrado nosotras y la ciudad; pues, no te habrías quedado en ella más que cualquier otro ateniense, si no te hubiese gustado ésta sobre todo; nunca te has ausentado de ella ni para ir a una fiesta, excepto una vez al Istmo, ni has ido a ningún otro sitio, a no ser en alguna expedición militar; ni hiciste jamás ningún viaje, como los demás; ni tuviste deseo de conocer otras ciudades y otras leyes, sino que nosotras y nuestra ciudad fuimos suficiente para ti. Tan plenamente nos elegiste y estuviste de acuerdo en vivir como ciudadano según nosotras, que incluso tuviste tus hijos aquí, sin duda porque te agradaba la ciudad.\n\nY aquel de vosotros que se quede, sabiendo de qué manera nosotras hacemos justicia y administramos la ciudad en los demás aspectos, afirmamos que éste, de hecho, está de acuerdo con nosotras en hacer lo que nosotras ordenamos', next: [93]},
    {id: 93, speaker: 'L', text: 'Y decimos, si no obedece, que es tres veces culpable:', next: [94], choices: [{next: 100, text: 'Son sus progenitoras'}, {next: 101, text: 'Nos han criado'}, {next: 102, text: 'Habia un acuerdo en obedecer'}], type: 'block'},
    {id: 94, speaker: 'L', text: 'En tales acusaciones decimos que tú, Sócrates, te verás envuelto, si haces lo que tienes en mente, y no entre los que menos de los atenienses, sino entre los quemás.', next:[139]},
    {id: 95, speaker: 'L', text: 'Si violas estos acuerdos y delinques en algo de esto, ¿qué bien te producirás a ti mismo o a tus amigos? Pues, es poco más o menos evidente que también tus amigos corren el riesgo de ser desterrados y de ser privados de la ciudadanía, o de perder sus bienes.', type: "dead end"},
    {id: 96, speaker: 'L', text: 'Si vas a alguna de las ciudades más próximas, a Tebas o a Megara, pues ambas están bien regidas, llegarás, Sócrates, como enemigo de su régimen político, y cuantos se preocupan de sus propias ciudades te mirarán con recelo, considerándote destructor de las leyes, y así confirmarás la opinión de los jueces, de manera que parecerá que su sentencia fue justa; pues, el que es destructor de las leyes, fácilmente parecería también que es corruptor de jóvenes y de hombres insensatos.', next: [97]},
    {id: 97, speaker: 'L', text: 'Y haciendo esto, ¿valdrá la pena vivir? O te acercarás y tendrás la desvergüenza de dialogar con ellos, pero ¿con qué razonamientos, Sócrates? ¿Acaso con los mismos de aquí, que la virtud y la justicia son lo más estimable para los hombres, así como las costumbres y las leyes? ¿No crees que parecerá vergonzosa la conducta de Sócrates? Hay que creer que sí', next: [98]},
    {id: 98, speaker: 'L', text: '¿O bien te alejarás de estos lugares y te irás a Tesalia con los huéspedes de Critón? Allí sin duda hay mucho libertinaje y desenfreno, y quizás les guste oírte de qué modo tan gracioso huiste de la cárcel, poniéndote un disfraz, o envuelto en una piel o usando cualquier otro método habitual para los fugitivos, cambiando además tu apariencia exterior.', next: [99]},
    {id: 99, speaker: 'L', text: '¿No habrá nadie que pregunte por qué un hombre viejo, al que le queda poco tiempo de vida, como es natural, tuvo el descaro de desear vivir tan tenazmente, violando las leyes más importantes? Quizás no, si no ofendes a nadie. En caso contrario, oirás muchas cosas indignas de ti. Ciertamente, vivirás adulando a todos y siendo su esclavo; pues, ¿qué harás allí sino darte a la buena vida como si hubieras viajado a Tesalia para ir a un banquete? ¿Dónde se nos quedarán aquellos razonamientos acerca de la justicia y las restantes formas de virtud?', type: 'dead end'},
    {id: 100, speaker: 'L', text: 'Justo, porque no nos obedece a nosotras, que somos sus progenitoras', type: 'dead end'},
    {id: 101, speaker: 'L', text: 'Sí, Porque le hemos criado.', type: 'dead end'},
    {id: 102, speaker: 'L', text: 'Porque, habiendo estado de acuerdo con nosotras en obedecernos, ni nos obedece ni nos persuade sino hacemos bien alguna cosa, a pesar de que nosotras proponemos hacer lo que ordenamos y no lo imponemos por la fuerza, sino que permitimos una opción entre dos, persuadirnos u obedecernos, y no cumple ninguna de las dos el que no obedece.', type: 'dead end'},
    {id: 103, speaker: 'C', text: 'Por egoísta', next: [93]},
    {id: 104, speaker: 'C', text: 'Por creerse juez y verdugo', next: [93]},
    {id: 105, speaker: 'C', text: 'Cuerpo', next: [18]},
    {id: 106, speaker: 'C', text: 'Si, nunca obrar injustamente', next: [70]},
    {id: 107, speaker: 'C', text: 'Alma', next: [20]},
    {id: 108, speaker: 'C', text: 'No, a veces hay que obrar injustamente', next: [68]},
    {id: 109, speaker: 'S', text: 'No me convences', type: 'dead end'},
    {id: 110, speaker: 'S', text: '...', type: 'dead end'},
    {id: 111, speaker: 'S', text: 'Pero, querido Critón, ¿qué nos importa esa opinión de los demás?. Pues los más honrados, de los que sí vale la pena preocuparse, considerarán que esto ha sucedido tal y como tenía que suceder', next: [112]},
    {id: 112, speaker: 'C', text: 'Pero ves que es necesario, Sócrates, preocuparse también de la opinión de los demás. Pues estas cosas de ahora ponen de manifiesto que la mayoría es capaz de llevar a cabo no sólo los más pequeños males, sino quizás incluso los más grandes, contra aquel que haya incurrido en su odio.', next: [113]},
    {id: 113, speaker: 'S', text: 'Ojalá, Critón, la mayoría fuera capaz de hacer los mayores males, para que también fuera capaz de realizar los mayores bienes. Eso sería magnífico. Pero ahora no son capaces de hacer ninguna de las dos cosas; pues, no siendo capaces de hacer a otro ni sensato ni insensato, lo que hacen lo hacen al azar.', next: [114]},
    {id: 114, speaker: 'C', text: 'Pero, Sócrates, dime ¿acaso temes por mí y por los demás amigos tuyos que, si tú sales de aquí, los sicofantes nos causen algún daño por haberte sacado, y que nos veamos obligados a perder toda nuestra fortuna o muchas riquezas o, incluso, a sufrir algún otro daño además de éstos? Pues, si temes algo de tal clase, olvídate de ello. Es justo que nosotros, de alguna manera, corramos este riesgo por salvarte y, si es necesario, aun otro mayor. Vamos, hazme caso y no obres de otro modo.\n\nY ¿no ves que estos sicofantes son muy baratos y que no haría falta mucho dinero para sobornarles. Yo creo que te bastaría con mis riquezas.', next: [115]},
    {id: 115, speaker: 'C', text: 'Y, si quisieras ir a Tesalia, tengo allí amigos que te estimarán en mucho y te procurarán seguridad, de modo que nadie te moleste en Tesalia. Además...', type: 'dead end'},
    {id: 116, speaker: 'S', text: '...', type: 'dead end'},
    {id: 117, speaker: 'C', text: 'Porque traigo una noticia terrible, Sócrates. No para ti, a lo que veo, pero sí terrible y dura para mí y para todos tus amigos; por mi parte, no creo que pudiera recibir otra más dura.', next: [118]},
    {id: 118, speaker: 'S', text: '¿Qué noticia? ¿Acaso ha llegado ya la nave procedente de Delos a cuyo regreso es preciso que yo muera?', next: [119]},
    {id: 119, speaker: 'C', text: 'Todavía no ha llegado, pero me parece a mí que llega hoy, según lo que han dicho algunos que vienen de Sunion y la han dejado allí. Según éstos, es evidente que la nave llega hoy y, por lo tanto, será forzoso, Sócrates, que mañana pongas fin a tu vida.', next: [120]},
    {id: 120, speaker: 'S', text: 'Pues si así agrada a los dioses, Critón, que así sea en buena hora. Sin embargo, no creo que llegue hoy la nave.', next: [121], choices: [{next: 121, text: '¿De dónde deduces eso?'}]},
    {id: 121, speaker: 'C', text: '¿De dónde deduces eso?', next: [122]},
    {id: 122, speaker: 'S', text: 'Te lo voy a decir. De alguna manera, según parece, yo he de morir al día siguiente de aquel en que llegue la nave.', next: [123]},
    {id: 123, speaker: 'C', text: 'Por lo menos así lo afirman los que tienen autoridad sobre estas cosas.', next: [124]},
    {id: 124, speaker: 'S', text: 'Pues bien, no creo que llegue hoy la nave, sino mañana. Me baso en cierto sueño que he tenido esta noche, hace un momento. Y has sido muy oportuno al no despertarme.', next: [125], choices: [{next: 125, text: '¿Qué sueño ha sido ese?'}]},
    {id: 125, speaker: 'C', text: 'Y bien, ¿qué sueño ha sido ese?', next: [126]},
    {id: 126, speaker: 'S', text: 'Me parecía que una mujer hermosa y de noble aspecto se me acercaba, vestida de blanco, y llamándome me decía: “Sócrates, al tercer día llegarás a la fértil Ftía"', next: [127]},
    {id: 127, speaker: 'C', text: 'Extraño sueño, Sócrates.', next: [128]},
    {id: 128, speaker: 'S', text: 'Esclarecedor, a mi modo de ver, Critón.', next: [129]},
    {id: 129, speaker: 'C', text: 'Demasiado, según parece. Pero, querido Sócrates, aun así, hazme caso y sálvate. Para mí, si murieses, no sería una única desgracia, sino que...', next: [49], choices: [{next: 130, text: 'Perdería un amigo único'}, {next: 131, text: 'Parecería que preferí dinero sobre tu vida'}, {next: 132, text: 'No creerán que te negaste a irte'}, {next: 133, text: 'No es justo'}, {next: 134, text: 'Traicionas a tus propios hijos'}], type: 'block'},
    {id: 130, speaker: 'C', text: 'Me veria privado de un amigo como jamás encontraré otro', next: [109]},
    {id: 131, speaker: 'C', text: 'Muchos de los que no nos conocen bien a ti y a mí, podrían creer que, siendo capaz de salvarte, si hubiera querido gastar dinero, lo descuidé. Y ciertamente, ¿qué fama sería más vergonzosa que ésta de parecer que se estima en más el dinero que a los amigos?', next: [110]},
    {id: 132, speaker: 'C', text: 'La mayoría no se convencerá de que tú mismo te negaste a salir de aquí, a pesar de nuestros ruegos', next: [116]},
    {id: 133, speaker: 'C', text: 'Me parece que intentas una acción que no es justa: entregarte, cuando puedes salvarte, y apresurarte a hacer contra ti cosas que sólo tus enemigos procurarían y de hecho han procurado, ansiando destruirte.', next: [51]},
    {id: 134, speaker: 'C', text: 'Me parece a mí que traicionas a tus propios hijos, a los que, siéndote posible criarlos y educarlos, dejas abandonados al marchar; y, por tu parte, ellos harán lo que la suerte les depare. Dispondrán, como es natural, de aquellas cosas que se depara a los huérfanos en los orfanatos. Así pues, es necesario o no tener hijos o acarrear con el peso de su crianza y educación, y a mí me parece que tú eliges lo más sencillo', type: 'dead end'},
    {id: 135, speaker: 'C', text: 'Por supuesto que permanece.', next: [138]},
    {id: 136, speaker: 'S', text: 'Reflexiona, además, si permanece o no para nosotros el razonamiento de que no hay que considerar lo más importante el vivir, sino el vivir coherentemente.', next: [135], choices: [{next: 135, text: 'Por supuesto'}]},
    {id: 137, speaker: 'C', text: 'Lo mantenemos', next: [53]},
    {id: 138, speaker: 'S', text: 'Y que el vivir coherentemente, con honestidad y con justicia, son una misma cosa, ¿lo mantenemos o no?', next: [137]},
    {id: 139, speaker: 'S', text: 'Y si entonces yo dijera: “¿por qué?”, quizás me increparían con toda justicia diciéndome que yo soy uno de los atenienses que más he estado de acuerdo con ellas', next: [140]},
    {id: 140, speaker: 'L', text: 'Sócrates, grandes son las pruebas que tenemos de que éramos de tu agrado nosotras y la ciudad; pues, no te habrías quedado en ella más que cualquier otro ateniense, si no te hubiese gustado ésta sobre todo; nunca te has ausentado de ella ni para ir a una fiesta, excepto una vez al Istmo, ni has ido a ningún otro sitio, a no ser en alguna expedición militar; ni hiciste jamás ningún viaje, como los demás; ni tuviste deseo de conocer otras ciudades y otras leyes, sino que nosotras y nuestra ciudad fuimos suficiente para ti. Tan plenamente nos elegiste y estuviste de acuerdo en vivir como ciudadano según nosotras, que incluso tuviste tus hijos aquí, sin duda porque te agradaba la ciudad. Pues bien, te hubiera sido posible, en este mismo proceso, pedir para ti el destierro, si hubieras querido, y lo que ahora intentas contra la voluntad de la ciudad, entonces lo habrías hecho con su consentimiento. Entonces tú te vanagloriabas de que no te enojarías, si era preciso morir, y elegías, según afirmabas, la muerte antes que el destierro. Ahora, por el contrario, ni respetas aquellas palabras, ni te preocupas de nosotras, las leyes; intentas destruirnos y haces lo que el esclavo más ruin haría, al procurar escaparte en contra de los pactos y los acuerdos según los cuales acordaste con nosotras vivir como ciudadano. En primer lugar, entonces, contéstanos si decimos o no decimos la verdad al afirmar que tú, con obras, y no con palabras, estuviste de acuerdo en vivir como ciudadano según nosotras', next: [141]},
    {id: 141, speaker: 'S', text: '¿Qué diremos a esto, Critón?', choices: [{next: 142, text: 'Necesariamente'}]},
    {id: 142, speaker: 'C', text: 'Necesariamente, Sócrates', type:'dead end'},

];
  
  getNode(nodeId: number): DialogueNode | undefined {
    return this.dialogueNodes.find(node => node.id === nodeId);
  }
}