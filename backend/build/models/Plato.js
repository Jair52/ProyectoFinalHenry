"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = __importDefault(require("../sequelize")); // Ajusta la ruta según sea necesario
let Plato = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            modelName: 'Plato',
            tableName: 'Platos',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _nombre_extraInitializers = [];
    let _origen_decorators;
    let _origen_initializers = [];
    let _origen_extraInitializers = [];
    let _ingredientes_decorators;
    let _ingredientes_initializers = [];
    let _ingredientes_extraInitializers = [];
    let _kilocalorias_decorators;
    let _kilocalorias_initializers = [];
    let _kilocalorias_extraInitializers = [];
    let _carbohidratos_decorators;
    let _carbohidratos_initializers = [];
    let _carbohidratos_extraInitializers = [];
    let _grasas_decorators;
    let _grasas_initializers = [];
    let _grasas_extraInitializers = [];
    let _peso_decorators;
    let _peso_initializers = [];
    let _peso_extraInitializers = [];
    let _precio_decorators;
    let _precio_initializers = [];
    let _precio_extraInitializers = [];
    let _tipo_decorators;
    let _tipo_initializers = [];
    let _tipo_extraInitializers = [];
    let _imagen_decorators;
    let _imagen_initializers = [];
    let _imagen_extraInitializers = [];
    var Plato = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.nombre = __runInitializers(this, _nombre_initializers, void 0);
            this.origen = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _origen_initializers, void 0));
            this.ingredientes = (__runInitializers(this, _origen_extraInitializers), __runInitializers(this, _ingredientes_initializers, void 0));
            this.kilocalorias = (__runInitializers(this, _ingredientes_extraInitializers), __runInitializers(this, _kilocalorias_initializers, void 0));
            this.carbohidratos = (__runInitializers(this, _kilocalorias_extraInitializers), __runInitializers(this, _carbohidratos_initializers, void 0));
            this.grasas = (__runInitializers(this, _carbohidratos_extraInitializers), __runInitializers(this, _grasas_initializers, void 0));
            this.peso = (__runInitializers(this, _grasas_extraInitializers), __runInitializers(this, _peso_initializers, void 0));
            this.precio = (__runInitializers(this, _peso_extraInitializers), __runInitializers(this, _precio_initializers, void 0));
            this.tipo = (__runInitializers(this, _precio_extraInitializers), __runInitializers(this, _tipo_initializers, void 0));
            this.imagen = (__runInitializers(this, _tipo_extraInitializers), __runInitializers(this, _imagen_initializers, void 0));
            __runInitializers(this, _imagen_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Plato");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _nombre_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false,
            })];
        _origen_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _ingredientes_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING))];
        _kilocalorias_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)];
        _carbohidratos_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)];
        _grasas_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)];
        _peso_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)];
        _precio_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT)];
        _tipo_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _imagen_decorators = [(0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _origen_decorators, { kind: "field", name: "origen", static: false, private: false, access: { has: obj => "origen" in obj, get: obj => obj.origen, set: (obj, value) => { obj.origen = value; } }, metadata: _metadata }, _origen_initializers, _origen_extraInitializers);
        __esDecorate(null, null, _ingredientes_decorators, { kind: "field", name: "ingredientes", static: false, private: false, access: { has: obj => "ingredientes" in obj, get: obj => obj.ingredientes, set: (obj, value) => { obj.ingredientes = value; } }, metadata: _metadata }, _ingredientes_initializers, _ingredientes_extraInitializers);
        __esDecorate(null, null, _kilocalorias_decorators, { kind: "field", name: "kilocalorias", static: false, private: false, access: { has: obj => "kilocalorias" in obj, get: obj => obj.kilocalorias, set: (obj, value) => { obj.kilocalorias = value; } }, metadata: _metadata }, _kilocalorias_initializers, _kilocalorias_extraInitializers);
        __esDecorate(null, null, _carbohidratos_decorators, { kind: "field", name: "carbohidratos", static: false, private: false, access: { has: obj => "carbohidratos" in obj, get: obj => obj.carbohidratos, set: (obj, value) => { obj.carbohidratos = value; } }, metadata: _metadata }, _carbohidratos_initializers, _carbohidratos_extraInitializers);
        __esDecorate(null, null, _grasas_decorators, { kind: "field", name: "grasas", static: false, private: false, access: { has: obj => "grasas" in obj, get: obj => obj.grasas, set: (obj, value) => { obj.grasas = value; } }, metadata: _metadata }, _grasas_initializers, _grasas_extraInitializers);
        __esDecorate(null, null, _peso_decorators, { kind: "field", name: "peso", static: false, private: false, access: { has: obj => "peso" in obj, get: obj => obj.peso, set: (obj, value) => { obj.peso = value; } }, metadata: _metadata }, _peso_initializers, _peso_extraInitializers);
        __esDecorate(null, null, _precio_decorators, { kind: "field", name: "precio", static: false, private: false, access: { has: obj => "precio" in obj, get: obj => obj.precio, set: (obj, value) => { obj.precio = value; } }, metadata: _metadata }, _precio_initializers, _precio_extraInitializers);
        __esDecorate(null, null, _tipo_decorators, { kind: "field", name: "tipo", static: false, private: false, access: { has: obj => "tipo" in obj, get: obj => obj.tipo, set: (obj, value) => { obj.tipo = value; } }, metadata: _metadata }, _tipo_initializers, _tipo_extraInitializers);
        __esDecorate(null, null, _imagen_decorators, { kind: "field", name: "imagen", static: false, private: false, access: { has: obj => "imagen" in obj, get: obj => obj.imagen, set: (obj, value) => { obj.imagen = value; } }, metadata: _metadata }, _imagen_initializers, _imagen_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Plato = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Plato = _classThis;
})();
exports.Plato = Plato;
sequelize_1.default.addModels([Plato]);
