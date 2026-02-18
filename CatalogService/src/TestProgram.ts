import { container } from "tsyringe";

import { MockTransactionManager } from "Application/shared/MockTransactionManager";
import { InMemoryBookRepository } from "Infrastructure/InMemory/Book/InMemoryBookRepository";
import { InMemoryReviewRepository } from "Infrastructure/InMemory/Review/InMemoryReviewRepository";

import { MockDomainEventPublisher } from "Application/shared/DomainEvent/MockDomainEventPublisher";

// Repository registrations
container.register("IBookRepository", {
  useClass: InMemoryBookRepository
});

container.register("IReviewRepository", {
  useClass: InMemoryReviewRepository
});

// TransactionManager registration
container.register("ITransactionManager", {
  useClass: MockTransactionManager
});

// DomainEventPublisher registration
container.register("IDomainEventPublisher", {
  useClass: MockDomainEventPublisher
});