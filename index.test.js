const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

describe('POST /s1/exercice1', () => {
    test('Calcule la somme de n1 et n2', async () => {
        const res = await request(app).post("/s1/exercice1").send({ n1: 2, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 4 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n2: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

});

describe('POST /s1/exercice2', () => {
    test('Soustrait n1 et n2', async () => {
        const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: 2, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 0 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n2: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });
}
);

describe('POST /s1/exercice3', () => {
    test('Multiplie n1 et n2', async () => {
        const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: 2, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 4 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n2: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });
}
);

describe('POST /s1/exercice4', () => {
    test('Divise n1 et n2', async () => {
        const res = await request(app).post("/s1/exercice4").send({ n1: 6, n2: 3 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 2 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n2: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });
}
);

describe('POST /s1/exercice5', () => {
    test('Calcule la factorielle de n1', async () => {
        const res = await request(app)
        .post("/s1/exercice5")
        .send({ n1: 6 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 720 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice5")
          .send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice5")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
}
);

describe('POST /s1/exercice6', () => {
    test('Définit si n1 est pair ou impair', async () => {
        const res = await request(app).post("/s1/exercice6").send({ n1: 6 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "pair" }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice6")
          .send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice6")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
}
);

describe('POST /s1/exercice7', () => {
    test('Calcule la valeur n1 celsius en Fahrenheit', async () => {
        const res = await request(app)
        .post("/s1/exercice7")
        .send({ n1: 6 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 42.8 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice7")
          .send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice7")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
});

describe('POST /s1/exercice8', () => {
    test('Calcule l\'aire d\'un cercle de valeur n1', async () => {
        const res = await request(app)
        .post("/s1/exercice8")
        .send({ n1: 6 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 113.09733552923255 }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice8")
          .send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice8")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
});

describe('POST /s1/exercice9', () => {
    test('Nous dire si n1 est un palindrome', async () => {
        const res = await request(app)
          .post("/s1/exercice9")
          .send({ n1: "kayak" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: true }]);
    });

    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice9")
          .send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice9")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
});

describe('POST /s1/exercice10', () => {
    test('Exercice 10 S1', async () => {
        const res = await request(app).post("/s1/exercice10").send({ n1: 6, n2: 3 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 3 }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n2: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });
});

describe('POST /s2/exercice1', () => {
    test('Exercice 1 S2', async () => {
        const res = await request(app).post("/s2/exercice1").send({});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "2013-11-05" }]);
    });
});

describe('POST /s2/exercice2', () => {
    test('Exercice 2 S2', async () => {
        const res = await request(app).post("/s2/exercice2").send({});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "05/11/2023" }]);
    });

    test('Renvoie une erreur si on passe une variable inconnue en argument', async () => {
        const res = await request(app)
            .post("/s2/exercice2")
            .send({param: "12-12-2020"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "05/11/2023" }]);
    });
});

describe('POST /s2/exercice3', () => {
    test('Exercice 3 S2', async () => {
        const res = await request(app).post("/s2/exercice3").send({date1: '2023-11-03', date2: '2023-11-05',});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 2 }]);
    });

    test("Renvoie une erreur si date1 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ date1: null, date2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si date2 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ date1: "2020-10-01", date2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si date1 et date2 sont null", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ date1: null, date2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de date1", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ date2: "2020-10-01" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de date1", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ date2: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur si date1 est inférieure à date2", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ date1: "2020-12-20", date1: "2023-12-10"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "date1 doit être inférieure à date2" }]);
      });
});

describe('POST /s2/exercice4', () => {
    test('Exercice 4 S2', async () => {
        const res = await request(app)
            .post('/s2/exercice4')
            .send({ date: '10/03/2023', jours: 10 }); 
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: '13/10/2023' }]);
    });

    test("Renvoie une erreur si date est null", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ date: null, jours: 10 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si jours est null", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ date: "2020-10-01", jours: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si date et jours sont null", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ date: null, jours: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de date", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ jours: 10 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur s'il n'y a pas de jour", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ date1: "2020-10-01" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });

      test("Renvoie une erreur la variable jours est égale à un nombre différent de 10", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ jour: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "La variable jour doit être égale à 10" }]);
      });
});

describe('POST /s2/exercice5', () => {
    test('Exercice 5 S2', async () => {
        const res = await request(app).post("/s2/exercice5").send({ annee: 2024 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: true }]); // 2024 est une année bissextile

        const res2 = await request(app).post("/s2/exercice5").send({ annee: 2022 });
        expect(res2.statusCode).toBe(200);
        expect(res2.body).toEqual([{ reponse: false }]); // 2022 n'est pas une année bissextile
    });

    test("Renvoie une erreur si annee est null", async () => {
        const res = await request(app)
          .post("/s2/exercice5")
          .send({ annee: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur s'l n'y a pas d'annee", async () => {
        const res = await request(app)
          .post("/s2/exercice5")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
      });
});

describe('POST /s2/exercice6', () => {
    test("Récupère le premier jour du mois de la date n1", async () => {
        const res = await request(app).post("/s2/exercice6").send({ n1: "2021-10-01"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vendredi" }]);
      });

    test('Renvoie une erreur s\'il n\'y a pas de n1', async () => {
        const res = await request(app).post('/s2/exercice6').send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous n'avez pas saisi un paramètre" }]);
    });

    test('Renvoie une erreur si n1 est nulle', async () => {
        const n1 = null;
        const res = await request(app).post('/s2/exercice6').send({ n1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Vous devez entrer un nombre" }]);
    });
});

describe('POST /s2/exercice7', () => {
    test("Récupère le dernier jour du mois de la date n1", async () => {
        const res = await request(app).post("/s2/exercice7").send({ n1: "2021-10-01"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Dimanche" }]);
      });

      test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice7")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice7")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice7")
          .send({ n1: "2024-15-12" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });

});

describe('POST /s2/exercice8', () => {
    test("Convertit une date n1 en heures et en minutes", async () => {
        const res = await request(app).post("/s2/exercice8").send({ n1: "2023-01-01"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "La date 2023-01-01 équivaut à 464592 heures, soit 27875520 minutes écoulées depuis le 01/01/1970." }]);
      });

      test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice8")
          .send({ n1: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
      });
  
      test("Renvoie une erreur s'il n'y a pas de n1", async () => {
          const res = await request(app)
            .post("/s2/exercice8")
            .send({ });
          expect(res.statusCode).toBe(200);
          expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
      });
  
      test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
          const res = await request(app)
            .post("/s2/exercice8")
            .send({ n1: "2023-13-01" });
          expect(res.statusCode).toBe(200);
          expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
      });
  
      test("Renvoie une erreur si n1 est avant le 01/01/1970", async () => {
          const res = await request(app)
            .post("/s2/exercice8")
            .send({ n1: "1965-01-01" });
          expect(res.statusCode).toBe(200);
          expect(res.body).toEqual([{ reponse: "Veuillez entrer une date avant le 1er janvier 1970." }]);
      });

});
