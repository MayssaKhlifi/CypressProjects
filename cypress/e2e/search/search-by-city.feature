Feature: Search an estate by city
As a visitor I want to be able to search an estate by city/type/max price so i can select relevant one

  Scenario: Seach an estate to rent by city and max price
  Given je suis sur la welcome page
  When Je fais la cherche d'un bien avec les critères suivants:
  |type_projet|type_bien|prix|ville|
  |Louer|Appartement|1500|Paris|
  Then Je vois la liste des biens qui correspondent à :
 |type_projet|type_bien|prix|ville|
  |Louer|Appartement|1500|Paris|
