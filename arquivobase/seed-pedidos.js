module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Pedidos', [
        {
            cliente: 'Jéssica Assis',
            comidas: 'M&Ms Amendoim',
            bebidas: 'Del Valle Uva',
            combos: 'Pipoca Salgada P + Refrigerante P',
            valor: 62.50,
            pagamento: 'Crédito',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            cliente: 'Rodrigo Souza',
            comidas: 'Snickers',
            bebidas: 'Coca-cola Zero',
            combos: 'Pipoca Doce G Dupla',
            valor: 75.50,
            pagamento: 'Débito',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            cliente: 'Bianca Garcia',
            comidas: 'Kit Kat',
            bebidas: 'Matte Leão Fuze',
            combos: 'Pipoca Salgada G + Refrigerante P Duplo',
            valor: 83.90,
            pagamento: 'Voucher',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            cliente: 'Thiago Gomes',
            comidas: 'Fini Tubes Morango',
            bebidas: 'Del Valle Limão',
            combos: 'Pipoca Salgada M Dupla',
            valor: 75.50,
            pagamento: 'Débito',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Pedidos', null, {});
    }
  };