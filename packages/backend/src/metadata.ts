/* eslint-disable */
export default async () => {
    const t = {
        ["./app/common/projects/project.entity"]: await import("./app/common/projects/project.entity"),
        ["./app/common/users/user.entity"]: await import("./app/common/users/user.entity"),
        ["./app/common/projects/project-users/project.user.entity"]: await import("./app/common/projects/project-users/project.user.entity"),
        ["./app/common/workspaces/workspace.entity"]: await import("./app/common/workspaces/workspace.entity"),
        ["./app/common/workspaces/types"]: await import("./app/common/workspaces/types"),
        ["./app/common/spaces/space.entity"]: await import("./app/common/spaces/space.entity"),
        ["./app/common/lists/list.entity"]: await import("./app/common/lists/list.entity"),
        ["./app/common/cards/card-lists/card.list.entity"]: await import("./app/common/cards/card-lists/card.list.entity"),
        ["./app/common/views/types"]: await import("./app/common/views/types"),
        ["./app/common/lists/types"]: await import("./app/common/lists/types"),
        ["./app/common/props/types"]: await import("./app/common/props/types"),
        ["./app/common/filters/types"]: await import("./app/common/filters/types"),
        ["./app/common/filters/filter.entity"]: await import("./app/common/filters/filter.entity"),
        ["./app/common/lists/list-stages/list.stage.entity"]: await import("./app/common/lists/list-stages/list.stage.entity"),
        ["./app/common/lists/list-groups/list.group.entity"]: await import("./app/common/lists/list-groups/list.group.entity"),
        ["./app/common/views/view.entity"]: await import("./app/common/views/view.entity"),
        ["./app/common/props/prop.entity"]: await import("./app/common/props/prop.entity"),
        ["./app/common/cards/card.entity"]: await import("./app/common/cards/card.entity"),
        ["./app/common/cards/card-activities/card.activity.entity"]: await import("./app/common/cards/card-activities/card.activity.entity"),
        ["./app/common/projects/project-users/dto/create.project.user.dto"]: await import("./app/common/projects/project-users/dto/create.project.user.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./app/common/projects/project-users/project.user.entity"), { "ProjectUser": { id: { required: true, type: () => Number }, project: { required: true, type: () => t["./app/common/projects/project.entity"].Project }, user: { required: true, type: () => t["./app/common/users/user.entity"].User }, role: { required: true, type: () => String }, createdAt: { required: true, type: () => Date } } }], [import("./app/common/projects/project.entity"), { "Project": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, ownerId: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, users: { required: true, type: () => [t["./app/common/projects/project-users/project.user.entity"].ProjectUser] }, workspaces: { required: true, type: () => [t["./app/common/workspaces/workspace.entity"].Workspace] } } }], [import("./app/common/workspaces/workspace.entity"), { "Workspace": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, ownerId: { required: true, type: () => Number }, type: { required: true, enum: t["./app/common/workspaces/types"].WorkspaceTypes }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, project: { required: true, type: () => [t["./app/common/projects/project.entity"].Project] }, projectId: { required: true, type: () => Number }, spaces: { required: true, type: () => [t["./app/common/spaces/space.entity"].Space] }, users: { required: true, type: () => [t["./app/common/users/user.entity"].User] } } }], [import("./app/common/spaces/space.entity"), { "Space": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, workspace: { required: true, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, workspaceId: { required: true, type: () => Number }, lists: { required: true, type: () => [t["./app/common/lists/list.entity"].List] } } }], [import("./app/common/lists/list-stages/list.stage.entity"), { "ListStage": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, color: { required: true, type: () => String }, order: { required: true, type: () => Number }, isCompleted: { required: true, type: () => Boolean, description: "When set to true, sets card\nas closed when it is moved to it." }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number }, cardLists: { required: true, type: () => [t["./app/common/cards/card-lists/card.list.entity"].CardList] } } }], [import("./app/common/views/view.entity"), { "View": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, type: { required: true, enum: t["./app/common/views/types"].ViewTypes }, groupBy: { required: true, enum: t["./app/common/lists/types"].ListGroupOptions }, sortBy: { required: true, type: () => Object }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number } } }], [import("./app/common/props/prop.entity"), { "Prop": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, type: { required: true, enum: t["./app/common/props/types"].PropTypes }, required: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List } } }], [import("./app/common/filters/filter.entity"), { "Filter": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, entityId: { required: true, type: () => Number }, entityType: { required: true, enum: t["./app/common/filters/types"].FilterEntityTypes }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./app/common/cards/dto/create.card.dto"), { "CreateCardDto": { title: { required: true, type: () => String }, listId: { required: true, type: () => Number }, listStageId: { required: true, type: () => Number }, description: { required: false, type: () => Object }, dueAt: { required: false, type: () => Date }, users: { required: false, type: () => [t["./app/common/users/user.entity"].User] }, createdBy: { required: true, type: () => Number } } }], [import("./app/common/cards/dto/update.card.dto"), { "UpdateCardDto": { users: { required: false, type: () => [t["./app/common/users/user.entity"].User] } } }], [import("./app/common/cards/card-lists/dto/create.card.list.dto"), { "CreateCardListDto": { cardId: { required: true, type: () => Number }, listId: { required: true, type: () => Number }, listStageId: { required: true, type: () => Number } } }], [import("./app/common/cards/card-lists/dto/update.card.list.dto"), { "UpdateCardListDto": {} }], [import("./app/common/lists/list-groups/list.group.entity"), { "ListGroup": { id: { required: true, type: () => Number }, entityId: { required: true, type: () => Number }, entityType: { required: true, enum: t["./app/common/lists/types"].ListGroupEntityTypes }, name: { required: true, type: () => String }, type: { required: true, enum: t["./app/common/lists/types"].ListGroupOptions }, isExpanded: { required: true, type: () => Boolean }, color: { required: true, type: () => String }, order: { required: true, type: () => Number }, icon: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number }, filter: { required: false, type: () => t["./app/common/filters/filter.entity"].Filter }, cards: { required: false, type: () => Object } } }], [import("./app/common/lists/list.entity"), { "List": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, space: { required: true, type: () => t["./app/common/spaces/space.entity"].Space }, spaceId: { required: true, type: () => Number }, listStages: { required: true, type: () => [t["./app/common/lists/list-stages/list.stage.entity"].ListStage] }, listGroups: { required: true, type: () => [t["./app/common/lists/list-groups/list.group.entity"].ListGroup] }, cardLists: { required: true, type: () => [t["./app/common/cards/card-lists/card.list.entity"].CardList] }, views: { required: true, type: () => [t["./app/common/views/view.entity"].View] }, props: { required: true, type: () => [t["./app/common/props/prop.entity"].Prop] } } }], [import("./app/common/cards/card-lists/card.list.entity"), { "CardList": { id: { required: true, type: () => Number }, listStage: { required: true, type: () => t["./app/common/lists/list-stages/list.stage.entity"].ListStage }, listStageId: { required: true, type: () => Number }, card: { required: true, type: () => t["./app/common/cards/card.entity"].Card }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number }, order: { required: true, type: () => Number } } }], [import("./app/common/cards/card-activities/card.activity.entity"), { "CardActivity": { id: { required: true, type: () => Number }, card: { required: true, type: () => t["./app/common/cards/card.entity"].Card }, type: { required: true, enum: t["./app/common/cards/card-activities/card.activity.entity"].ActivityType }, content: { required: true, type: () => Object }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, createdAt: { required: true, type: () => Date } } }], [import("./app/common/cards/card.entity"), { "Card": { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, description: { required: false, type: () => Object }, dueAt: { required: true, type: () => Date }, data: { required: true, type: () => Object }, cardLists: { required: true, type: () => [t["./app/common/cards/card-lists/card.list.entity"].CardList] }, users: { required: true, type: () => [t["./app/common/users/user.entity"].User] }, activities: { required: true, type: () => [t["./app/common/cards/card-activities/card.activity.entity"].CardActivity] }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date } } }], [import("./app/common/users/user.entity"), { "User": { id: { required: true, type: () => Number, description: "The unique identifier for the user." }, email: { required: true, type: () => String, description: "The user's email address. It can also be set to unique if you desire." }, password: { required: true, type: () => String, description: "The hashed password for the user. It is stored in a secure way using bcrypt." }, firstName: { required: true, type: () => String, description: "The first name of the user." }, lastName: { required: true, type: () => String, description: "The last name of the user." }, phoneNumber: { required: true, type: () => String, description: "The user's phone number." }, country: { required: true, type: () => String, description: "The user's country (ISO2 code)" }, photo: { required: true, type: () => String, description: "The photo URL of the user." }, roles: { required: true, type: () => [String], description: "The roles assigned to the user. It can represent different permission levels." }, onboarding: { required: true, type: () => Object, description: "Holds general data from the user's onboarding" }, createdAt: { required: true, type: () => Date, description: "A timestamp representing when the user account was created." }, updatedAt: { required: true, type: () => Date, description: "A timestamp representing when the user account was last updated." }, deletedAt: { required: true, type: () => Date }, projects: { required: true, type: () => [t["./app/common/projects/project-users/project.user.entity"].ProjectUser], description: "A relationship to the ProjectUser entity representing the user's projects." }, cards: { required: true, type: () => [t["./app/common/cards/card.entity"].Card], description: "A relationship to the Card entity representing the user's cards." } } }], [import("./app/common/users/dto/create.user.dto"), { "CreateUserDto": { firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, phoneNumber: { required: false, type: () => String }, country: { required: false, type: () => String } } }], [import("./app/common/users/dto/update.user.dto"), { "UpdateUserDto": {} }], [import("./app/common/projects/project-users/dto/create.project.user.dto"), { "CreateProjectUserDto": { user: { required: true, type: () => t["./app/common/users/user.entity"].User }, role: { required: true, type: () => String }, project: { required: true, type: () => t["./app/common/projects/project.entity"].Project } } }], [import("./app/common/projects/dto/create.project.dto"), { "CreateProjectDto": { name: { required: true, type: () => String }, ownerId: { required: false, type: () => Number }, users: { required: false, type: () => [t["./app/common/projects/project-users/dto/create.project.user.dto"].CreateProjectUserDto] } } }], [import("./app/common/projects/dto/update.project.dto"), { "UpdateProjectDto": {} }], [import("./app/common/projects/project-users/dto/update.project.user.dto"), { "UpdateProjectUserDto": {} }], [import("./app/common/cards/card-activities/dto/create.card.activity.dto"), { "CreateCardActivityDto": { card: { required: true, type: () => Number }, type: { required: true, enum: t["./app/common/cards/card-activities/card.activity.entity"].ActivityType }, content: { required: true, type: () => Object }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User } } }], [import("./app/common/spaces/dto/create.space.dto"), { "CreateSpaceDto": { name: { required: true, type: () => String }, workspaceId: { required: true, type: () => Number }, createOnboardingData: { required: false, type: () => Boolean } } }], [import("./app/common/spaces/dto/update.space.dto"), { "UpdateSpaceDto": {} }], [import("./app/common/lists/dto/create.list.dto"), { "CreateListDto": { name: { required: true, type: () => String }, spaceId: { required: true, type: () => Number }, createOnboardingData: { required: false, type: () => Boolean } } }], [import("./app/common/lists/dto/update.list.dto"), { "UpdateListDto": {} }], [import("./app/common/lists/list-stages/dto/create.list.stage.dto"), { "CreateListStageDto": { name: { required: true, type: () => String }, listId: { required: true, type: () => Number }, color: { required: true, type: () => String }, order: { required: true, type: () => Number }, isCompleted: { required: false, type: () => Boolean } } }], [import("./app/common/lists/list-stages/dto/update.list.stage.dto"), { "UpdateListStageDto": {} }], [import("./app/common/views/dto/create.view.dto"), { "CreateViewDto": { name: { required: true, type: () => String }, type: { required: true, enum: t["./app/common/views/types"].ViewTypes }, listId: { required: true, type: () => Number } } }], [import("./app/common/views/dto/update.view.dto"), { "UpdateViewDto": {} }], [import("./app/common/lists/list-groups/dto/create.list.group.dto"), { "CreateListGroupDto": { entityId: { required: false, type: () => Number }, entityType: { required: false, enum: t["./app/common/lists/types"].ListGroupEntityTypes }, type: { required: false, enum: t["./app/common/lists/types"].ListGroupOptions }, name: { required: false, type: () => String }, color: { required: false, type: () => String }, icon: { required: false, type: () => String }, order: { required: false, type: () => Number }, isExpanded: { required: false, type: () => Boolean }, listId: { required: false, type: () => Number } } }], [import("./app/common/filters/dto/create.filter.dto"), { "CreateFilterDto": { name: { required: false, type: () => String }, entityId: { required: true, type: () => Number }, entityType: { required: true, enum: t["./app/common/filters/types"].FilterEntityTypes } } }], [import("./app/common/filters/dto/update.filter.dto"), { "UpdateFilterDto": {} }], [import("./app/common/lists/list-groups/dto/update.list.group.dto"), { "UpdateListGroupDto": {} }], [import("./app/common/workspaces/dto/create.workspace.dto"), { "CreateWorkspaceDto": { name: { required: true, type: () => String }, ownerId: { required: false, type: () => Number }, type: { required: true, enum: t["./app/common/workspaces/types"].WorkspaceTypes }, projectId: { required: true, type: () => Number }, createOnboardingData: { required: false, type: () => Boolean } } }], [import("./app/common/workspaces/dto/update.workspace.dto"), { "UpdateWorkspaceDto": {} }], [import("./app/common/props/dto/create.prop.dto"), { "CreatePropDto": { name: { required: true, type: () => String } } }], [import("./app/common/props/dto/update.prop.dto"), { "UpdatePropDto": {} }], [import("./app/common/cards/card-activities/dto/update.card.activity.dto"), { "UpdateCardActivityDto": {} }]], "controllers": [[import("./app/common/users/users.controller"), { "UsersController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/users/user.entity"].User }, "create": { type: t["./app/common/users/user.entity"].User }, "update": { type: t["./app/common/users/user.entity"].User }, "remove": {} } }], [import("./app/common/auth/auth.controller"), { "AuthController": { "login": { description: "Logs the user in with email and password", type: Object }, "register": { type: Object } } }], [import("./app/common/projects/projects.controller"), { "ProjectsController": { "findAll": { type: [t["./app/common/projects/project.entity"].Project] }, "findOne": { type: t["./app/common/projects/project.entity"].Project }, "create": { type: t["./app/common/projects/project.entity"].Project }, "update": { type: t["./app/common/projects/project.entity"].Project }, "remove": {} } }], [import("./app/common/projects/project-users/project.users.controller"), { "ProjectUsersController": { "findAll": { type: [t["./app/common/projects/project-users/project.user.entity"].ProjectUser] }, "findOne": { type: t["./app/common/projects/project-users/project.user.entity"].ProjectUser }, "create": { type: t["./app/common/projects/project-users/project.user.entity"].ProjectUser }, "update": { type: t["./app/common/projects/project-users/project.user.entity"].ProjectUser }, "remove": {} } }], [import("./app/common/cards/cards.controller"), { "CardsController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/cards/card.entity"].Card }, "create": { type: t["./app/common/cards/card.entity"].Card }, "update": { type: t["./app/common/cards/card.entity"].Card }, "remove": {} } }], [import("./app/common/cards/card-lists/card.lists.controller"), { "CardListssController": { "updateCardList": { type: t["./app/common/cards/card-lists/card.list.entity"].CardList }, "orderCards": {} } }], [import("./app/common/cards/card-activities/card.activities.controller"), { "CardActivitiesController": { "findAll": { type: [t["./app/common/cards/card-activities/card.activity.entity"].CardActivity] }, "create": { type: t["./app/common/cards/card-activities/card.activity.entity"].CardActivity }, "delete": {} } }], [import("./app/common/spaces/spaces.controller"), { "SpacesController": { "findAll": { type: [t["./app/common/spaces/space.entity"].Space] }, "findOne": { type: t["./app/common/spaces/space.entity"].Space }, "create": { type: t["./app/common/spaces/space.entity"].Space }, "update": { type: t["./app/common/spaces/space.entity"].Space }, "remove": {} } }], [import("./app/common/lists/lists.controller"), { "ListsController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/lists/list.entity"].List }, "create": { type: t["./app/common/lists/list.entity"].List }, "update": { type: t["./app/common/lists/list.entity"].List }, "remove": {} } }], [import("./app/common/lists/list-groups/list.groups.controller"), { "ListGroupsController": { "generateGroups": { type: [t["./app/common/lists/list-groups/list.group.entity"].ListGroup] }, "updateGroup": { type: t["./app/common/lists/list-groups/list.group.entity"].ListGroup } } }], [import("./app/common/lists/list-stages/list.stages.controller"), { "ListStagesController": { "findStages": { type: [t["./app/common/lists/list-stages/list.stage.entity"].ListStage] } } }], [import("./app/common/filters/filters.controller"), { "FiltersController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/filters/filter.entity"].Filter }, "create": { type: t["./app/common/filters/filter.entity"].Filter }, "update": { type: t["./app/common/filters/filter.entity"].Filter }, "remove": {} } }], [import("./app/common/views/views.controller"), { "ViewsController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/views/view.entity"].View }, "create": { type: t["./app/common/views/view.entity"].View }, "update": { type: t["./app/common/views/view.entity"].View }, "remove": {} } }], [import("./app/common/workspaces/workspaces.controller"), { "WorkspacesController": { "findAll": { type: [t["./app/common/workspaces/workspace.entity"].Workspace] }, "findOne": { type: t["./app/common/workspaces/workspace.entity"].Workspace }, "create": { type: t["./app/common/workspaces/workspace.entity"].Workspace }, "update": { type: t["./app/common/workspaces/workspace.entity"].Workspace }, "remove": {} } }], [import("./app/common/props/props.controller"), { "PropsController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/props/prop.entity"].Prop }, "create": { type: t["./app/common/props/prop.entity"].Prop }, "update": { type: t["./app/common/props/prop.entity"].Prop }, "remove": {} } }]] } };
};