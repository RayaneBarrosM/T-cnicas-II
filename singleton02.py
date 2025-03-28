class Aluno:
    _instancia = None
    _inicializado = False

    def __new__(cls, *args, **kwargs):
        if not cls._instancia:
            cls._instancia = super().__new__(cls, *args, **kwargs)
        return cls._instancia
    
    def __init__(self):
        if not self._inicializado:
            self._inicializado = True
            self.nome = ""
            self.notas = {}

    def definirNome(self, nome):
        self.nome = nome

    def addNota(self, disciplina, nota):
        self.notas[disciplina] = nota

    def calcularMedia(self):
        total = sum(self.notas.values())
        return total / len(self.notas)
    
# exemplo de uso
if __name__ == "__main__":
    # instanciando o aluno (utilizando singleton)
    aluno1 = Aluno()
    aluno1.definirNome("Beomgyu")

    # adicionar notas
    aluno1.addNota("Matemática", 8.5)
    aluno1.addNota("História", 7.0)
    aluno1.addNota("Ciências", 9.2)

    # obter a media de notas
    print(f"Media de {aluno1.nome}: {aluno1.calcularMedia()}")

    # criando outra ref ao aluno (mesma instancia utilizada)
    aluno2 = Aluno()
    aluno2.definirNome("Huening Kai")

    # adicionar notas
    aluno2.addNota("Matemática", 9.0)
    aluno2.addNota("História", 5.0)
    aluno2.addNota("Ciências", 8.0)

    # obter a media de notas
    print(f"Media de {aluno2.nome}: {aluno2.calcularMedia()}")