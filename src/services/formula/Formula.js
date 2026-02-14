// FormulaR

export default class Formula {
  constructor(prismaClient) {
    this.prisma = prismaClient; 
  }

  async save(name, expression, payItemId) {
     try {
       return await this.prisma.formula.create({
       data: { name, expression, payItemId }
        });
       } catch (error) {
         console.log(error)
         throw new Error(error)
     }
    
  }

  async getAll() {
    return this.prisma.formula.findMany();
  }

  async getByName(name) {
    return this.prisma.formula.findUnique({
      where: { name }
    });
  }

  async getByPayItemUuid(payItemId) {
    return this.prisma.formula.findMany({
      where: { payItemId },
      select: {
        id: true,
        name: true,
        expression: true,
        
      },
    });
  }
}
