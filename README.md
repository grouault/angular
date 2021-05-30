## angular

### Synthèse décomposition des composant

* Sub/Pub avec Subject

* service dans lequel on va gérer la communication entre les composants : EventDriverService

* Pour pouvoir faire la communication entre les composants d'une application à travers un objet,
il faut créer un subject
    - Subject (rxjs) : programmation réactive
    - utilisation du design pattern Observable
    - Dans le Subject, on va publier des évènements de type ActionEvent
    - Sur le subject, on va créer un Observable