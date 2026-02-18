import { container } from "tsyringe";

import { SQLBookRepository } from "Infrastructure/SQL/Book/SQLBookRepository";
import { SQLReviewRepository } from "Infrastructure/SQL/Review/SQLReviewRepository";
import { SQLTransactionManager } from "Infrastructure/SQL/SQLTransactionManager";

import { EventEmitterDomainEventPublisher } from "Infrastructure/EventEmitter/EventEmitterDomainEventPublisher";
import { EventEmitterDomainEventSubscriber } from "Infrastructure/EventEmitter/EventEmitterDomainEventSubscriber";

// repository
container.register("IBookRepository", {
  useClass: SQLBookRepository
});

container.register("IReviewRepository", {
  useClass: SQLReviewRepository
});

// transactionManager
container.register("ITransactionManager", {
  useClass: SQLTransactionManager
});

// domainEventPublisher
container.register("IDomainEventPublisher", {
  useClass: EventEmitterDomainEventPublisher
});

// domainEventSubscriber
container.register("IDomainEventSubscriber", {
  useClass: EventEmitterDomainEventSubscriber
});