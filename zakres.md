# Project scope / Zakres systemu

## Brief project description / Krótki opis projektu
Należy zbudować oprogramowanie wykorzystywane do obsługi paczkomatu, który umożliwia zarówno nadanie nowej, jak i odbiór przesyłki. W celu nadania przesyłki należy wprowadzić dane adresowe nadawcy i odbiorcy oraz lokalizację docelowego paczkomatu. Urządzenie wydaje naklejkę, którą użytkownik nakleja na paczkę, po czym umieszcza ją w odpowiedniej szufladzie automatu. Odbiór paczki odbywa się na podstawie numeru telefonu i unikalnego kodu przesłanego na telefon odbiorcy. Po wprowadzeniu danych automat otwiera odpowiednią szufladę, umożliwiając zabranie paczki. Zarówno podczas nadania, jak i odbioru paczki może zostać pobrana opłata (w zależności od typu paczki) – paczkomat obsługuje płatność kartą, gotówką oraz z wykorzystaniem specjalnego konta prepaid
## System actors with description / Aktorzy systemu i ich opis

### Primary actors / Aktorzy podstawowi
Actor / Aktor | Opis
--- | ---
Client / Klient | Osoba nadająca, odbierająca przesyłkę z paczkomatu, lub zainteresowana jej lokalizacją. Klient jest osobą między 16 a 75 rokiem życia. Przykładowym klientem jest allegrowicz, który może nadawać kilka paczek w tygodniu i potrzebuje systemu, który przyśpieszy i ułatwi ten proces.
Courier / Kurier | Osoba odpowiada za transportowanie przesyłek pomiędzy paczkomatami. Od kuriera wymagane jest pełnoletniość, posiadanie aktualnego prawa jazdy, zaświadczenie o niekaralności oraz 4-letnie doświadczenie w branży kurierskiej. 
Helpline Employee / Pracownik Infolinii | Osoba odpowiedzialna za kontakt z klientem, rozwiązywanie problemów i udzielanie informacji. Od pracownika infolinii wymagane jest ukończenie 18 roku życia, wykształcenie wyższe oraz doświadczenie w kontakcie z klientem. Posiadający dobrze rozwinięte umiejętności miękkie..
Serviceman / Serwisant | Osoba odpowiedzialna za konserwację i naprawę paczkomatów w przypadku usterki. Serwisant musi mieć wykształcenie wyższe techniczne oraz mieć prawo jazdy, oraz samochód umożliwiający mu szybkie dotarcie do paczkomatów. Serwisant powinien być dodatkowo osobą mocno dyspozycyjną w razie poważnych usterek wymagających szybkiej naprawy.
System admin / Administrator systemu | Osoba odpowiadająca za poprawne funkcjonowanie systemu oraz zarządzanie uprawnieniami. Wymagane jest doświadczenie 2-letnie w administrowaniu podobnie złożonych systemów oraz wykształcenie wyższe techniczne.

### Secondary actors / Aktorzy wspomagający
Actor / Aktor | Opis
--- | ---
Bank System / System bankowy | Instytucja odpowiedzialna za dokonywanie i przetwarzanie płatności. Udostępnia terminal płatniczy. Wspiera płatności walutą zdefiniowaną w liście In/Out.
ISP / Dostawca usług internetowych | Firma dostarczająca usługi internetowe i gwarantująca stabilne łącze internetowe. Zapewnia bez awaryjność i bezzwłoczne usuwanie usterki. Proponownym łączem jest łącze symetryczne min 25Mb/s i z opóźnieniem nie większym niż 100ms.
Mobile Network / Telefonia komórkowa | Firma dostarczająca usługi telekomunikacyjne.

### External actors / Aktorzy zewnętrzni
Actor / Aktor | Opis
--- | ---
Tax office / Urząd skarbowy | Sprawuje kontrole nad poprawnością opodatkowania transakcji
Owner / Właściciel | Oczekuje, że paczki w paczkomacie nie zostaną skradzione, zostaną dostarczone w nienaruszonym stanie, zostaną dostarczone na czas.

## Actor-goal table / Tabela aktor-cel

### Primary actors / Aktorzy podstawowi
Actor / Aktor | Goals
--- | ---
Client / Klient | Nadawanie paczek 
 | Odbieranie paczek 
Courier / Kurier | Przekazywanie paczek z jednego do drugiego paczkomatu,
 | Uzupełnianie / opróżnianie paczkomtu,
 | Jeśli jest taka konieczność przetransportowanie paczki do magazynu.
Helpline Employee / Pracownik Infolinii | Kontakt z klientem drogą telefoniczną
 | Rozwiązywanie problemów użytkowników
 | Wyjaśnienie działania systemu i jego funkcji
 | Tworzenie FAQ
Serviceman / Serwisant | Naprawa usterek mechanicznych paczkomatu
 | Wymiana materiałów eksploatacyjnych
 | Zgłoszanie usterek niemożliwych do natychmiastowej naprawy
System admin / Administrator systemu | Usuwanie usterek i błędów systemu,
 | Aktualizowanie oprogramowania paczkomatu,
 | Modernizowanie systemu na podstawie bazy danych problemów i pytań użytkowników.

### Secondary actors / Aktorzy wspomagający
Actor / Aktor | Goals
--- | ---
Bank System / System bankowy | Udostępnia terminal, za którego pomocą realizowana jest płatność
 | Zarządza obsługą płatności | Dokonywanie zwrotów w przypadku anulowania usługi lub jej niepowodzenia.
ISP / Dostawca usług internetowych | Zapewnia stabilne łącze internetowe | Dokonuje ekspresowyh napraw w razie awarii | Udostępnia publiczny adres IP
Mobile Network / Telefonia komórkowa | Pośredniczy w przesyłaniu informacji ( kodu autoryzacyjnego lub informacji o stanie przesyłki )
 | Pośredniczy w komunikacji klienta z pracownikami infolinii

### External actors / Aktorzy zewnętrzni
Actor / Aktor | Goals
--- | ---
Tax office / Urząd skarbowy | Prowadzenie egzekucji administracyjnej należności pieniężnych.
Owner / Właściciel | Sprawowanie kontroli nad funkcjonowaniem systemu.

## IN-OUT list / Lista IN-OUT

Category / Kategoria    | IN | OUT
--- | --- | ---
Payments / Płatności   |  PLN | Reszta form płatności (gotówka etc.)
 | EUR | Reszta walut
 | USD |
 | GBP | 
 | Płatność kartą | 
 | Blik | 
Types of shipments / Rodzaje przesyłek | Przedpłata
 | Za pobraniem
Languages / Języki | Polski | Reszta języków
 | Angielski | 
 | Niemiecki | 
Dimensions of packages / Gabaryty paczek | Minimalne: 9 cm x 14 cm (strona adresowa) z tolerancją +/-2 mm | Mniejsze niż 9cm x 14cm (strona adresowa)
 | Gabaryt A – długość = max 60 cm, szerokość = max 50 cm, wysokość = max 30 cm | Paczka na której uniemożliwone jest umieszczenie w sposób poprawny naklejki adresowej (mocno nieregularne kształty)
Package Weight / Waga paczki | Waga poniżej 30 kg | Waga powyżej 30 kg
Place of Delivery / Miejsce doręczenia paczki | Paczkomat | Posiadłość prywatna i inne


## Project dictionary / Słownik projektowy
Term / Pojęcie | Definition / Definicja
--- | ---
Użytkownik | Indywiduum korzystające z paczkomatu
Klient | Osoba nadająca lub odbierająca przesyłkę z paczkomatu
Nadawcy | Klient wysyłający przesyłkę
Adresat | Klient do którego wysyłamy przesyłkę
Dane nadawcy | Numer telefonu, imię, nazwisko, adres email
Dane adresata | Numer telefonu, lokalizacja paczkomatu docelowego
Kurier | Osoba uprawniona do otwierania skrytek klienckich w celu odbioru przesyłki i przekazania jej do paczkomatu docelowego
Etykietę | Naklejka adresowa umieszczana na przesyłce
Paczkomat | Maszyna z panelem kontrolnym i zestawem skrytek na przesyłki
Administrator systemu | Osoba odpowiedzialna za rozwój i utrzymanie software'u Paczkomatów
Serwistant | Osoba odpowiedzialna za mechaniczną konserwację i naprawę Paczkomatów
Gabaryt | Rozmiar paczki podawany w 3 wymiarach (wysokość, szerokość, głębokość)
Infolinia | Udziela informacji użytkownikom i rozwiązuje problemy do których nie potrzeba serwisanta czy administratora
FAQ | ang. _Frequently Asked Questions_ - najczęściej zadawane pytania
Telefonia komórkowa | Infrastruktura telekomunikacyjna, umożliwiająca abonentom bezprzewodowe połączenia
Urząd skarbowy | Jednostka Krajowej Administracji Skarbowej obsługująca naczelnika urzędu skarbowego, który jest organem administracji niezespolonej podlegającym Ministrowi Finansów.
Dostawca usług internetowych | Podmiot oferujący usługę dostępu do sieci Internet
System bankowy | Całokształt instytucji bankowych oraz normy, które określają ich wzajemne powiązania i stosunki z otoczeniem
kod weryfikacyjnego | 6 cyfrowy kod który otrzymuje adresat, służący do odebrania paczki
numer przesyłki | 20 cyfrowy kod który reprezentuje paczke w systemie
Materiały eksploatacyjne | Papier termiczny z klejem, na którym drukowane są etykiety przyklejane na przesyłki.

## Short Use Cases / Skrócone przypadki użycia
### UC1: Consignment / Nadanie przesyłki

Klient podchodzi do paczkomatu w celu nadania przesyłki. Klient wybiera z menu opcje nadania przesyłki, po czym wypełnia dane adresata oraz nadawcy. Po wypełnieniu danych klient wybiera formę przesyłki oraz zaznacza odpowiedni gabaryt. Gdy wszystkie dane zostały podane prawidłowo, klient w zależności od formy przesyłki uiszcza opłatę za nadanie przesyłki, następnie pobiera i nakleja etykietę na przesyłce i umieszcza ją w odpowiedniej skrytce. Po tych wszystkich operacjach przesyłka została prawidłowo nadana.
    

### UC2: Consignment / Odebranie przesyłki

Klient podchodzi do paczkomatu w celu odebrania przesyłki. Klient wybiera z menu opcje odebrania przesyłki, po czym wypełnia dane do odbioru, m.in. kod weryfikacyjny oraz numer telefonu, na który przyszło powiadomienie o przesyłce. Jeżeli informacje zostały wpisane prawidłowo, klient w zależności od formy przesyłki uiszcza opłatę pobraniową, następnie klient wyjmuje paczkę z odpowiedniej skrytki. Po tych wszystkich operacjach przesyłka została prawidłowo odebrana.
    
### UC3: Consignment / Odebranie paczki przez kuriera

Kurier podchodzi do paczkomatu w celu wyjęcia paczek. Kurier wybiera z menu wyjęcie paczki lub paczek przez kuriera. Dokonuje autoryzacji. Na panelu wybiera otwarcie odpowiednich skrytek. Po wyjęciu paczek zamyka skrytki i potwierdza wyjęcie paczek oraz wylogowywuje się z systemu.

### UC4: Consignment / Śledzenie przesyłki

Klient, używając urządzenia mobilnego łączy się ze stroną internetową paczkomatów oraz wybiera opcje śledzenia przesyłki. Po wybraniu opcji klient jest proszony o podanie numeru przesyłki potrzebnego do jej lokalizacji. Jeżeli podany kod został wprowadzony prawidłowo, klient otrzymuje informacje o stanie i lokalizacji paczki.
    
### UC5: Consignment / Uzupełnienie paczkomatu przez kuriera

Kurier podchodzi do paczkomatu w celu umieszczenia paczek. Kurier wybiera z menu uzupełnienie paczkomatu przez kuriera. Dokonuje autoryzacji. Na panelu wybiera otwarcie odpowiednich skrytek. Po umieszczeniu paczek w odpowiednich skrytkach zamyka skrytki i potwierdza uzupełnienie paczkomatu oraz wylogowywuje się z systemu.

### UC6: Consignment / Usuwanie usterek i błędów systemu

Administrator dostaje zgłoszenie o wystąpieniu usterki lub błędu w systemie. Administrator przystępuje do jej naprawienia. Po naprawie następuje deploy poprawionej wersji oprogramowania.

### UC7: Consignment / Przetransportowanie paczek do magazynu

Kurier podjeżdża do paczkomatu. Kurier wybiera z menu wyjęcie paczki lub paczek przez kuriera.
Dokonuje autoryzacji. Na panelu wybiera otwarcie skrytek z zaległymi paczkami. Po wyjęciu paczek zamyka skrytki i potwierdza wyjęcie paczek oraz wylogowywuje się z systemu.

### UC8: Consignment / Kontakt z pracownikiem infolinii

Klient wybiera numer telefoniczny podanych na paczkomacie, stronie internetowej lub etykiecie. Po wybraniu i zadzwonieniu pod podany numer zostaje połączony z pracownikiem infolinii, któremu opisuje napotkany problem lub zadaje mu pytania związane z funkcjonowaniem systemu paczkomatowego. Pracownik infolinii instruuje klienta, w jaki sposób ma rozwiązać problem lub odpowiada na pytania klienta. Po rozwiązaniu problemu lub uzyskaniu informacji, której potrzebowaliśmy klient kończy rozmowę telefoniczną z pracownikiem infolinii.

### UC9: Consignment / Naprawa usterek mechanicznych paczkomatu

Serwisant po wezwaniu przyjeżdża do wskazanego przez zgłaszającego paczkomatu. Po wstępnym zdiagnozowaniu przyczyn i typu usterki przechodzi do prac naprawczych. W pierwszej kolejności wysyła do systemu zgłoszenie o wyłączeniu z użytku danego urządzenia. Wyłącza urządzenie z sieci elektrycznej oraz przechodzi do napraw, zachowując wszystkie zasady bezpiecznej pracy, oraz zasad serwisowych wyznaczonych przez producenta urządzenia. Po zakończonych pracach uruchamia ponownie paczkomat i dokonuje krótkiego sprawdzenia, czy naprawiona rzecz działa dobrze. Po całkowitym zakończeniu prac naprawczych serwisant wysyła informację do systemu, że paczkomat jest sprawny i nadaje się do ponownego użytku.

### UC10: Consignment / Wymiana materiałów eksploatacyjnych

Po otrzymaniu informacji z systemu o wyczerpaniu materiałów eksploatacyjnych serwisant przyjeżdża do wskazanego paczkomatu. Następnie przechodzi do uzupełniania skończonych materiałów, otwiera przedni panel paczkomatu przy pomocy odpowiednich kluczy. Po zakończonej wymianie zamyka panel oraz testuje czy wszystko funkcjonuje dobrze. Zgłasza do systemu informację o uzupełnieniu zasobów oraz o dostępności urządzenia.

### UC11: Consignment / Tworzenie FAQ

Pracownik infolinii na podstawie zebranych danych od klientów dzwoniących z problemami tworzy dokument, w którym zawarte są wszystkie najczęściej zadawane pytania użytkowników. Stara się na wszystkie te pytanie odpowiedzieć w jak najprostrzy i przejrzysty sposób i umieszcza tak sporządzony dokument na stronie www systemu.

### UC12: Consignment / Aktualizowanie oprogramowania paczkomatu

Administrator ma przygotowane nowe elementy systemu lub poprawki, które były wcześniej przetestowane. Korzystając z odpowiednich narzędzi, administrator uaktualnia system dostępny dla klienta oraz dokonuje kolejnych testów. Tworzy dokumentację dotyczącą zmian, jakie zmiany zostały wgrane.

### UC13: Consignment / Modernizowanie systemu na podstawie bazy danych problemów i pytań użytkowników.

Administrator systemu po uzyskaniu odpowiedniej ilości danych o problemach z paczkomatem i najczęstszych pytań użytkowników dokonuje analizy zdarzeń i możliwości wdrożeń zmian w systemie. Po przeanalizowaniu możliwych opcji zgłasza to do właściciela, aby uzyskać zgody wymagane na przystąpienie prac. Następnie zaczyna tworzyć nowe lub poprawiać istniejące funkcjonalności systemu, aby dostosować je do potrzeb klientów oraz aby zwiększyć niezawodność systemu. Tworzy dokładną dokumentację zmian oraz nowych funkcjonalności. Po modernizacjach dokonuje testów i wdraża zmiany do systemu.
